import { useRef, useState, useEffect } from "react";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
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
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className='img-box'>
      <input type='file' onChange={handleChange} ref={inputRef} />

      {preview && (
        <div className='img-preview-container'>
          <img className='img-preview' src={preview} alt='이미지 미리보기' />
          <button className='img-delete-button' onClick={handleClearClick}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default FileInput;
