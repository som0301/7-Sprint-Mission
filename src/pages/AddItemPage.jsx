import { useState } from 'react';
import CommonButton from '../components/CommonButton';
import FileInput from '../components/FileInput';
import TagInput from '../components/TagInput.jsx';
import styled, { css } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 1200px;
  padding: 16px;
  margin: 0 auto 40px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FormHeaderText = styled.h2`
  font-weight: 700;
  font-size: 20px;
  font-family: Pretendard;
`;

const Label = styled.label`
  width: 100%;
`;

const LabelHeaderText = styled.h3`
  font-weight: 700;
  font-size: 14px;
  font-family: Pretendard;
  margin-bottom: 12px;
`;

const inputContents = css`
  display: block;
  width: 100%;
  height: 56px;
  padding: 16px 24px;
  border-radius: 12px;
  background-color: #f3f4f6;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #9ca3af;
  }
`;

const Input = styled.input`
  ${inputContents}
`;

const Textarea = styled.textarea`
  min-height: 200px;
  resize: none;
  ${inputContents};
`;

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

  const handlePriceChange = (e) => {
    const numberValue = parseFloat(e.target.value.replace(/[^\d.]/g, ''));
    let formattedValue = '';
    if (!isNaN(numberValue)) {
      formattedValue = numberValue.toLocaleString('ko-KR', {
        style: 'currency',
        currency: 'KRW',
      });
    }
    handleChange('price', formattedValue);
  };

  return (
    <Form id="addItemForm">
      <FormHeader>
        <FormHeaderText>상품 등록하기</FormHeaderText>
        <CommonButton
          type="submit"
          form="addItemForm"
          onSubmit={hanleSubmit}
          isActive={isActive}
        >
          등록
        </CommonButton>
      </FormHeader>
      <Label>
        <LabelHeaderText>상품 이미지</LabelHeaderText>
        <FileInput
          onChange={handleChange}
          name="images"
          value={values.images}
        />
      </Label>
      <Label>
        <LabelHeaderText>상품명</LabelHeaderText>
        <Input
          name="name"
          value={values.name}
          onChange={handleInputChange}
          type="text"
          placeholder="상품명을 입력해주세요"
          required
        />
      </Label>
      <Label>
        <LabelHeaderText>상품 소개</LabelHeaderText>
        <Textarea
          name="description"
          value={values.description}
          onChange={handleInputChange}
          type="text"
          placeholder="상품 소개를 입력해주세요"
          required
        ></Textarea>
      </Label>
      <Label>
        <LabelHeaderText>판매가격</LabelHeaderText>
        <Input
          name="price"
          value={values.price}
          onChange={handlePriceChange}
          type="text"
          placeholder="판매 가격을 입력해주세요"
          required
        />
      </Label>
      <Label>
        <LabelHeaderText>태그</LabelHeaderText>
        <TagInput name="tags" value={values.tags} onChange={handleChange} />
      </Label>
    </Form>
  );
}

export { Input };
