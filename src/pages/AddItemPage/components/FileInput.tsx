import React, { useRef, useState } from "react";
import { FormValues } from "./AddItemForm";

interface FileInputProps {
  name: keyof FormValues;
  value: File | null;
  onChange: (name: keyof FormValues, value: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ name, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(name, file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleClearClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      onChange(name, null);
      setPreview(null);
    }
  };

  return (
    <div className='img-box'>
      <label htmlFor='imgFile' className='img-label'>
        <span className='img-label-text'>이미지 등록</span>
      </label>
      <input
        type='file'
        id='imgFile'
        onChange={handleChange}
        ref={inputRef}
        style={{ display: "none" }}
      />
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
};

export default FileInput;
