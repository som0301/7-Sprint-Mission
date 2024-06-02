import './AddItem.css';
import ImageInput from './ImageInput';
import TagInput from './TagInput';
import PriceInput from './PriceInput';

const AddItem = () => {
  return (
    <form className="form-container">
      <div className="form-submit">
        <h2>상품 등록하기</h2>
        <button type="submit">등록</button>
      </div>
      <ImageInput />
      <label htmlFor="item-title">상품명</label>
      <input
        type="text"
        id="item-title"
        name="item-title"
        placeholder="상품명을 입력해주세요"
      />
      <label htmlFor="item-description">상품 소개</label>
      <textarea
        type="text"
        id="item-description"
        name="item-description"
        placeholder="상품 소개를 입력해주세요"
      />
      <PriceInput />
      <TagInput />
    </form>
  );
};

export default AddItem;
