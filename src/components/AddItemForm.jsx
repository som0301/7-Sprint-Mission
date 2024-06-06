import { useState } from "react";
import FileInput from "./FileInput";
import TagList from "./TagList";
import "./AddItemForm.css";

function AddItemForm() {
  const [values, setValues] = useState({
    imgFile: null,
    productName: "",
    description: "",
    price: "",
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className='add-item'>
      <header>
        <h1>상품 등록하기</h1>
        <button type='submit'>등록</button>
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
}

export default AddItemForm;
