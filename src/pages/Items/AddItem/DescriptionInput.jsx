import { useState } from 'react';

const DescriptionInput = ({ isValueCheck }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    isValueCheck(inputValue, 'description');
  };
  return (
    <>
      <label htmlFor="item-description">상품 소개</label>
      <textarea
        type="text"
        id="item-description"
        name="item-description"
        placeholder="상품 소개를 입력해주세요"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </>
  );
};

export default DescriptionInput;
