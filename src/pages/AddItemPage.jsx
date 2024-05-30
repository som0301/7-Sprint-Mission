import { useState } from 'react';
import CommonButton from '../components/CommonButton';
import FileInput from '../components/FileInput';
import TagInput from '../components/TagInput.jsx';

const INITIAL_VALUE = {
  images: [],
  name: '',
  description: '',
  price: '',
  tags: [],
};

export default function AddItemPage() {
  const [values, setValues] = useState(INITIAL_VALUE);
  const isActive =
    values.name && values.description && values.price && values.tags.length;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const hanleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('images');
  };

  return (
    <form id="addItemForm" className="add-item__form">
      <div>
        <h2>상품 등록하기</h2>
        <CommonButton
          type="submit"
          form="addItemForm"
          onSubmit={hanleSubmit}
          isActive={isActive}
        >
          등록
        </CommonButton>
      </div>
      <label>
        <h3>상품 이미지</h3>
        <FileInput
          onChange={handleChange}
          name="images"
          value={values.images}
        />
      </label>
      <label>
        <h3>상품명</h3>
        <input
          name="name"
          value={values.name}
          onChange={handleInputChange}
          type="text"
          placeholder="상품명을 입력해주세요"
          required
        />
      </label>
      <label>
        <h3>상품 소개</h3>
        <textarea
          name="description"
          value={values.description}
          onChange={handleInputChange}
          type="text"
          placeholder="상품 소개를 입력해주세요"
          required
        ></textarea>
      </label>
      <label>
        <h3>판매가격</h3>
        <input
          name="price"
          value={values.price}
          onChange={handleInputChange}
          type="text"
          placeholder="판매 가격을 입력해주세요"
          required
        />
      </label>
      <label>
        <h3>태그</h3>
        <TagInput name="tags" value={values.tags} onChange={handleChange} />
      </label>
    </form>
  );
}
