import Input from './Input';
import { styled } from 'styled-components';
import Button from './common/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  return (
    <form>
      <StyledFormHeader>
        <FormHeaderTitle>상품 등록하기</FormHeaderTitle>
        <Button className='btn btn-small' disabled>
          등록
        </Button>
      </StyledFormHeader>
      <Input
        htmlFor='ProductName'
        id='ProductName'
        type='text'
        placeholder='상품명을 입력해주세요'
      >
        상품명
      </Input>
      <Input
        htmlFor='ProductDescription'
        id='ProductDescription'
        type='textarea'
        placeholder='상품 소개를 입력해주세요'
        height='200px'
      >
        상품 소개
      </Input>
      <Input
        htmlFor='ProductPrice'
        id='ProductPrice'
        type='text'
        placeholder='판매 가격을 입력해주세요'
      >
        판매 가격
      </Input>
      <Input
        htmlFor='ProductTag'
        id='ProductTag'
        type='text'
        placeholder='태그를 입력해주세요'
      >
        태그
      </Input>
    </form>
  );
}

export default AddItemForm;
