import { useRef, useState, useEffect } from "react";
import "../styles/FileInput.css";
import plusIcon from "../images/icons/ic_plus.svg";
import CancelIcon from "../images/icons/ic_x.svg";

function FileInput() {
  const [value, setValue] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handlefileInputChange = (e) => {
    const nextValue = e.target.files[0];
    setValue(nextValue);
  };

  const handleCancelClick = (e) => {
    setPreview(null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
    return () => URL.revokeObjectURL(nextPreview);
  }, [value]);

  return (
    <div className="add-item-image-input-wrapper">
      <label className="add-item-image-input-label">상품 이미지</label>
      <div className="add-item-image-input-file-wrapper">
        <div className="add-item-image-input" onClick={handleImageClick}>
          <img src={plusIcon} alt="이미지 등록" width="48" height="48" />
          <span className="add-item-image-input-icon-label">이미지 등록</span>
        </div>
        {preview && (
          <div className="add-item-image-input-preview-wrapper">
            <img
              className="add-item-image-input-preview"
              src={preview}
              alt="이미지 미리보기"
              width="282"
              height="282"
            />
            <button
              className="add-item-image-input-cancel-button"
              onClick={handleCancelClick}
            >
              <img
                src={CancelIcon}
                alt="이미지 삭제"
                width="8"
                height="8"
              />
            </button>
          </div>
        )}
      </div>

      <input
        className="add-item-image-input-none"
        type="file"
        name="file"
        onChange={handlefileInputChange}
        ref={fileInputRef}
      />
    </div>
  );
}

export default FileInput;
