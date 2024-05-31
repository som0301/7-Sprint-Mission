import { FileInput, Input, Tag, TagContainer } from './Input';
import { styled } from 'styled-components';
import Button from './common/Button';
import { useState } from 'react';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

const StyledFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormHeaderTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

function AddItemForm() {
  const [tags, setTags] = useState([]);
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    tags: { tags },
    images: null,
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

  const handleNumberChange = (e) => {
    const { name } = e.target;
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    handleChange(name, value);
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    if (value.trim() === '') return;
    if (tags.length === 10) return;
    setTags((prevTags) => [...new Set([...prevTags, value.trim()])]);
    handleChange('tags', tags);
    // setValues((prevValues) => ({ ...prevValues, ['tags']: tags }));
  };

  const handleKeyDown = (e) => {
    if (e.code !== 'Enter') return;
    e.preventDefault();
  };

  const handleKeyUp = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      handleTagChange(e);
      e.target.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleDeleteTag = (idx) => {
    // 특정 key값을 가진 컴포넌트의 인덱스를 찾기
    // 그러고 그 요소를 삭제한 배열을 다시 set..

    setTags((prevTags) => {
      const nextTags = [...prevTags];
      nextTags.splice(idx, 1);
      return [...nextTags];
    });

    handleChange('tags', tags);
  };

  //TODO: tags 확인하면 한개 덜 나오는거 수정
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>
        <FormHeaderTitle>상품 등록하기</FormHeaderTitle>
        <Button type='submit' className='btn btn-small'>
          등록
        </Button>
      </StyledFormHeader>
      <FileInput name='images' value={values.images} onChange={handleChange} />
      <Input
        name='name'
        value={values.name}
        id='ProductName'
        type='text'
        placeholder='상품명을 입력해주세요'
        onChange={handleInputChange}
      >
        상품명
      </Input>
      <Input
        name='description'
        value={values.description}
        id='ProductDescription'
        type='textarea'
        placeholder='상품 소개를 입력해주세요'
        onChange={handleInputChange}
      >
        상품 소개
      </Input>
      <Input
        name='price'
        value={values.price}
        id='ProductPrice'
        type='text'
        placeholder='판매 가격을 입력해주세요'
        onChange={handleNumberChange}
      >
        판매 가격
      </Input>
      <div>
        <Input
          id='ProductTag'
          name='tags'
          type='text'
          placeholder='태그를 입력해주세요 (최대 10개)'
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
        >
          태그
        </Input>
        <TagContainer>
          {tags.map((tag, index) => (
            //   <StyledTag key={index}>{tag}</StyledTag>
            <Tag key={index} idx={index} onClick={handleDeleteTag}>
              {tag}
            </Tag>
          ))}
        </TagContainer>
      </div>
    </StyledForm>
  );
}

export default AddItemForm;
