import React, { useRef, useState } from "react";
import Image from "next/image";
import Plus from "@/assets/images/icons/ic_plus.svg";

interface FileInputProps<T> {
  name: keyof T;
  value: string;
  onChange: (name: keyof T, value: string | null) => void;
}

const FileInput = <T,>({ name, value, onChange }: FileInputProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const imageUrl = file ? URL.createObjectURL(file) : null;
    onChange(name, imageUrl);

    if (file) {
      setPreview(imageUrl);
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
    <div className='flex items-center mb-4'>
      <label
        htmlFor={name as string}
        className='w-72 h-72 flex flex-col items-center justify-center bg-gray-100 rounded-xl cursor-pointer relative'
      >
        <div
          className='absolute'
          style={{
            top: "99px",
            left: "117px",
            right: "117px",
            bottom: "135px",
            backgroundImage: `url(${Plus.src})`,
            backgroundSize: "48px 48px",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span
          className='text-gray-400 text-base font-normal absolute'
          style={{
            top: "159px",
          }}
        >
          이미지 등록
        </span>
      </label>
      <input
        type='file'
        id={name as string}
        onChange={handleChange}
        ref={inputRef}
        className='hidden'
      />
      {preview && (
        <div className='relative ml-4'>
          <Image
            className='w-72 h-72 border rounded-xl '
            src={preview}
            alt='이미지 미리보기'
            width={72}
            height={72}
          />
          <button
            className='absolute top-1 right-1 w-5 h-5 rounded-full bg-gray-500 text-white flex items-center justify-center cursor-pointer'
            onClick={handleClearClick}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default FileInput;
