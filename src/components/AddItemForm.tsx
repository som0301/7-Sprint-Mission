import { FileInput, Input, Tag, TagContainer } from '@components/Input';
import { StyledButton } from '@components/common/Button';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  StyledForm,
  StyledFormHeader,
  FormHeaderTitle,
} from '@components/common/CommonComponents';

interface Value {
  name: string;
  description: string;
  price: string;
  tags: string[];
  images: any; // any..
}

const initialValues: Value = {
  name: '',
  description: '',
  price: '',
  tags: [],
  images: '',
};

function AddItemForm() {
  const [isfilled, setIsFilled] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [values, setValues] = useState(initialValues);

  const handleChange = (name: string, value: string | number | string[]) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 모든 input 변경할때 사용
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  // 가격: 가격 입력할 때
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const uncomValue = String(e.target.value).replace(/[^\d]+/g, '');
    const value = uncomValue.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

    handleChange(name, value);
  };

  // 태그: 태그 상태 변경
  const handleTagChange = (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (value.trim() === '') return;
    if (tags.length === 10) return;
    setTags((prevTags) => {
      const nextTags = [...new Set([...prevTags, value.trim()])];
      return [...nextTags];
    });
  };

  // 태그: 태그 엔터키 눌렀을 때 submit 동작 막기
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code !== 'Enter') return;
    e.preventDefault();
  };

  // 태그: 엔터키 마지막으로 눌렀을때 tag 등록하고 현재 tag input 비우기
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      handleTagChange(e);
      (e.target as HTMLInputElement).value = '';
    }
  };

  // 태그: 태그삭제할때
  const handleDeleteTag = (idx: number) => {
    setTags((prevTags) => {
      const nextTags = [...prevTags];
      nextTags.splice(idx, 1);
      return nextTags;
    });
  };

  // 등록 버튼 : 등록 눌렀을 때
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values); // 아직 POST 구현 안해서 확인용 콘솔로그
  };

  useEffect(() => {
    // let isCheck = true;
    // for (let value in values) {
    //   isCheck = isCheck && initialValues[value] !== values[value];
    // }
    // isCheck =
    //   isCheck &&
    //   JSON.stringify(initialValues.tags) !== JSON.stringify(values.tags);

    const isCheck = (Object.keys(initialValues) as Array<keyof Value>).every(
      (key) => {
        if (key === 'tags') {
          return (
            JSON.stringify(initialValues[key]) !== JSON.stringify(values[key])
          );
        }
        return initialValues[key] !== values[key];
      }
    );

    setIsFilled(isCheck);
  }, [values]);

  useEffect(() => {
    handleChange('tags', tags);
  }, [tags]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>
        <FormHeaderTitle>상품 등록하기</FormHeaderTitle>
        <StyledButton disabled={!isfilled} type='submit' size='small'>
          등록
        </StyledButton>
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
