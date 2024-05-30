import { useState, useEffect } from 'react';
// 미완 (임시로 fileInput 복붙)
export default function TagInput({ name, value = [], onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const nextValue = e.target.value.split(' ');
      const distinctNextValue = [...new Set([...value, ...nextValue])];
      onChange(name, distinctNextValue);
      setInputValue('');
      e.preventDefault();
    }
  };

  const handleDelete = (e) => {
    const targetID = e.target.id;
    const targetIndex = value.indexOf(targetID);
    onChange(name, [
      ...value.slice(0, targetIndex),
      ...value.slice(targetIndex + 1),
    ]);
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="판매 가격을 입력해주세요"
        required
      />
      ;
      <ul>
        {value[0] &&
          value.map((item) => {
            return (
              <li key={item}>
                <span>{item}</span>
                <button onClick={handleDelete} id={item} type="button">
                  X
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
