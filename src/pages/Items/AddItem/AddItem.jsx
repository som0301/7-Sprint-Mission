import { useState, useEffect } from 'react';
import './AddItem.css';
import ImageInput from './ImageInput';
import TagInput from './TagInput';
import PriceInput from './PriceInput';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';

const AddItem = () => {
  const [disabled, setDisabled] = useState(false);
  const [isValid, setIsValid] = useState({
    title: false,
    description: false,
    price: false,
    tag: false,
  });

  const isValueCheck = (currentValue, name) => {
    if (currentValue.length > 0) {
      setIsValid((prev) => {
        return {
          ...prev,
          [name]: true,
        };
      });
    } else if (currentValue.length < 1) {
      setIsValid((prev) => {
        return {
          ...prev,
          [name]: false,
        };
      });
    }
  };

  useEffect(() => {
    const allTrue = Object.values(isValid).every((value) => value === true);

    setDisabled(allTrue);
  }, [isValid]);

  return (
    <form className="form-container">
      <div className="form-submit">
        <h2>상품 등록하기</h2>
        <button
          type="submit"
          disabled={!disabled}
          onClick={(e) => e.preventDefault()}
        >
          등록
        </button>
      </div>
      <ImageInput />
      <TitleInput isValueCheck={isValueCheck} />
      <DescriptionInput isValueCheck={isValueCheck} />
      <PriceInput isValueCheck={isValueCheck} />
      <TagInput isValueCheck={isValueCheck} />
    </form>
  );
};

export default AddItem;
