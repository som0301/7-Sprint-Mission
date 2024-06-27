import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FileInput from "./FileInput";
import TagList from "./TagList";
import "./AddItemForm.css";

export interface FormValues {
  imgFile: File | null;
  productName: string;
  description: string;
  price: string;
}

const AddItemForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    imgFile: null,
    productName: "",
    description: "",
    price: "",
  });

  const handleChange = (name: keyof FormValues, value: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    handleChange(name as keyof FormValues, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { productName, description, price } = values;
    const isValid = productName !== "" && description !== "" && price !== "";
    setIsFormValid(isValid);
  }, [values]);

  return (
    <div className='add-item'>
      <header>
        <h1>상품 등록하기</h1>
        <button type='submit' disabled={!isFormValid} className='submit-button'>
          등록
        </button>
      </header>
      <div>
        <form className='AddItemForm' onSubmit={handleSubmit}>
          <div className='input-box'>
            <h2>상품 이미지</h2>
            <FileInput
              name='imgFile'
              value={values.imgFile}
              onChange={handleChange}
            />
          </div>

          <div className='input-box'>
            <h2>상품명</h2>
            <input
              name='productName'
              value={values.productName}
              onChange={handleInputChange}
              placeholder='상품명을 입력해주세요'
            />
          </div>
          <div className='input-box'>
            <h2>상품 소개</h2>
            <textarea
              name='description'
              value={values.description}
              onChange={handleInputChange}
              placeholder='상품 소개를 입력해주세요'
            />
          </div>
          <div className='input-box'>
            <h2>판매 가격</h2>
            <input
              type='number'
              name='price'
              value={values.price}
              onChange={handleInputChange}
              placeholder='판매 가격을 입력해주세요'
            />
          </div>
          <div className='input-box'>
            <h2>태그</h2>
            <TagList />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
