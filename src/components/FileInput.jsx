import { useState, useEffect } from 'react';

export default function FileInput({ name, value = [], onChange }) {
  const [previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, [...value, nextValue]);
    console.log(value);
  };

  const handleDelete = (e) => {
    const targetPreview = e.target.id;
    const targetIndex = previews.indexOf(targetPreview);
    onChange(name, [
      ...value.slice(0, targetIndex),
      ...value.slice(targetIndex + 1),
    ]);
  };

  useEffect(() => {
    const nextPreviews = value.map((item) => URL.createObjectURL(item));
    setPreviews((prevPreviews) => [...nextPreviews]);

    return () => {
      value.forEach((item) => URL.revokeObjectURL(item));
    };
  }, [value]);

  return (
    <>
      <input onChange={handleChange} type="file" />;
      <ul>
        {previews[0] &&
          previews.map((item) => {
            return (
              <li key={item}>
                <img src={item} alt="이미지 미리보기" />
                <button id={item} type="button" onClick={handleDelete}>
                  X
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
