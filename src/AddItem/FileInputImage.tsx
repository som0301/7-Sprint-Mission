import "./AddItem.css";
import plus from "../images/plus.svg";
import deleteIcon from "../images/deleteIcon.svg";
import { ChangeEvent, useEffect, useState } from "react";

function FileInputImage() {
  const [currentImage, setCurrentImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string| undefined>(undefined);

  useEffect(() => {
    if (!currentImage) return;

    const obejctURL = URL.createObjectURL(currentImage);
    setPreviewImage(obejctURL);

    return () => {
      setPreviewImage(undefined);
      URL.revokeObjectURL(obejctURL);
    };
  }, [currentImage]);

  const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCurrentImage(file);
    } else {
      setCurrentImage(null);
    }
  };

  const handleFileDelete = () => {
    setCurrentImage(null);
  };

  return (
    <div className="add-product image">
      <label className="add-label">상품 이미지</label>
      <div className="add-img">
      <label className="custom-file-upload">
        <img src={plus} alt="이미지 등록" className="upload-icon" />
        <span className="upload-text">이미지 등록</span>
        <input
          className="add-product-input image"
          type="file"
          onChange={handleFileChange}
        />
      </label>
      {currentImage && (
        <div className="img-delete">
          <img className="current-Image" src={previewImage} alt="현재 이미지"/>
          <button className="img-delete-button "onClick={handleFileDelete}>
            <img src={deleteIcon} alt="삭제" className="img-delete-button-img"/>
          </button>
        </div>
      )}
      </div>
    </div>
  );
}

export default FileInputImage;
