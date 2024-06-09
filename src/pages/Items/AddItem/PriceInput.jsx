import { useState } from 'react';

const PriceInput = ({ isValueCheck }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    const formattedValue = inputValue
      ? Number(inputValue).toLocaleString()
      : '';

    setInputValue(formattedValue);
  };

  const handleInputBlur = () => {
    isValueCheck(inputValue, 'price');
  };

  return (
    <>
      <label htmlFor="item-price">판매가격</label>
      <input
        type="text"
        placeholder="판매 가격을 입력해주세요"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </>
  );
};

export default PriceInput;
