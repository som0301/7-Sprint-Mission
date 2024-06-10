import { useState, useEffect, useRef } from "react";
import "../style/addItem.css";
import plusImg from "../assets/ic_plus.svg";
import cancelIcon from "../assets/ic_x.svg";

function AddItemImage() {
  const [preview, setPreview] = useState();
  const [value, setValue] = useState();
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    setValue(nextValue);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleCancelClick = () => {
    setPreview(null);
    setValue(null);
    fileInputRef.current.value = "";
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
    return () => URL.revokeObjectURL(nextPreview);
  }, [value]);

  return (
    <div className="file-input-container">
      <div className="file-input-wrapper">
        <label className="input-title">상품 이미지</label>
        <div className="file-input-rectangle" onClick={handleImageClick}>
          <img className="register-image" src={plusImg} />
          <p className="register-img-text">이미지 등록</p>
        </div>
        <input
          ref={fileInputRef}
          className="file-input"
          type="file"
          onChange={handleChange}
        />
      </div>
      {preview && (
        <div className="add-item-preview-wrapper">
          <img
            className="add-item-preview"
            src={preview}
            alt="이미지 미리보기"
            width="282"
            height="282"
          />
          <button
            className="cancel-preview-img-button"
            onClick={handleCancelClick}
          >
            <img src={cancelIcon} alt="이미지 삭제" width="8" height="8" />
          </button>
        </div>
      )}
    </div>
  );
}

export default AddItemImage;
