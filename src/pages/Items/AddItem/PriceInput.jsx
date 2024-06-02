import { useState } from 'react';

const PriceInput = () => {
  const [price, setPrice] = useState('');

  const handlePriceChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    const formattedValue = inputValue
      ? Number(inputValue).toLocaleString()
      : '';

    setPrice(formattedValue);
  };
  return (
    <>
      <label htmlFor="item-price">판매가격</label>
      <input
        type="text"
        placeholder="판매 가격을 입력해주세요"
        value={price}
        onChange={handlePriceChange}
      />
    </>
  );
};

export default PriceInput;
