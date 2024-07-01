import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import { FormValues } from "./AddItemForm";

interface FileInputProps {
  name: keyof FormValues;
  value: File | null;
  onChange: (name: keyof FormValues, value: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ name, value, onChange }) => {
  const [preview, setPreview] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files?.[0] || null;
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
      setPreview(undefined);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className='img-box'>
      <label htmlFor='imgFile' className='img-label'><span className='img-label-text'>이미지 등록</span></label>
      <input type='file' id='imgFile' onChange={handleChange} ref={inputRef} />
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
