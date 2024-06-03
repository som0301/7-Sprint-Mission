import { useEffect, useRef, useState } from "react";
import addIcon from "../image/addIcon.png";
import styles from "../styles/AddItemPage.module.css";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    onChange(name, null); // 파일 선택 값 초기화
    inputRef.current.value = ""; // 파일 선택 input 값 초기화하여 파일 선택 창이 닫힘
  };

  const handleDivClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className={styles.FileInputContainer}>
      <div className={styles.customFileInput} onClick={handleDivClick}>
        <div className={styles.addImgPlaceholder}>
          <img src={addIcon} alt="image add icon" />
          <p>이미지 등록</p>
        </div>
      </div>
      {preview && (
        <div className={styles.customFileInput}>
          <img
            src={preview}
            alt="image preview"
            className={styles.previewImage}
          />
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClearClick}
          >
            X
          </button>
        </div>
      )}
      <input
        type="file"
        name="imgFile"
        accept="image/jpg, image/jpeg, image/png"
        style={{ display: "none" }}
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
}

export default FileInput;
