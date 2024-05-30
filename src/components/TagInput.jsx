import { useState, useEffect } from 'react';

export default function TagInput({ name, value = [], onChange }) {
  const [tags, setTags] = useState([]);
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, [...value, nextValue]);
    console.log(value);
  };

  const handleDelete = (e) => {
    const targetPreview = e.target.id;
    const targetIndex = tags.indexOf(targetPreview);
    onChange(name, [
      ...value.slice(0, targetIndex),
      ...value.slice(targetIndex + 1),
    ]);
  };

  useEffect(() => {
    const nextTags = value.map((item) => URL.createObjectURL(item));
    setTags((prevTags) => [...nextTags]);

    return () => {
      value.forEach((item) => URL.revokeObjectURL(item));
    };
  }, [value]);

  return (
    <>
      <input onChange={handleChange} type="text" />;
      <ul>
        {tags[0] &&
          tags.map((item) => {
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
