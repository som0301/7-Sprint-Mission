import { useEffect, useRef, useState } from "react";
import logoImg from "../../assets/images/icons/ic_plus.svg";
import xIcon from "../../assets/images/icons/ic_x.svg";

function FileInput({ value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <section id="file-input-section">
      <div className="file-input-wrapper">
        <input
          ref={inputRef}
          id="fileInput"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
        <div className="add-image-wrapper">
          <img id="add-img" src={logoImg} alt="추가하기" />
          <span>이미지 등록</span>
        </div>
      </div>
      <div className="previewImage-wrapper">
        {value && <img id="previewImage" src={preview} alt="이미지 미리보기" />}
        {value && (
          <button className="cancel-button" onClick={handleClearClick}>
            <img src={xIcon} alt="이미지 삭제" />
          </button>
        )}
      </div>
    </section>
  );
}

export default FileInput;
