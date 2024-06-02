import { useState } from 'react';

const TitleInput = ({ isValueCheck }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    isValueCheck(inputValue, 'title');
  };

  return (
    <>
      <label htmlFor="item-title">상품명</label>
      <input
        type="text"
        id="item-title"
        name="item-title"
        placeholder="상품명을 입력해주세요"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </>
  );
};

export default TitleInput;
