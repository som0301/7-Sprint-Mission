import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange, initialPreview }) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClear = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
      setPreview(initialPreview);
    };
  }, [value, initialPreview]);

  return (
    <div>
      <div className="product-input">
        <p className="file-input-title">상품 이미지</p>
        <div className="file-img-container">
          <label className="file-input-label" htmlFor="input-file" />
          {value && (
            <img src={preview} alt="이미지 미리보기" className="img-preview" />
          )}
          <input
            type="file"
            accept="image/file, image/jpeg"
            onChange={handleChange}
            ref={inputRef}
            id="input-file"
          />
        </div>
      </div>
    </div>
  );
}

export default FileInput;
