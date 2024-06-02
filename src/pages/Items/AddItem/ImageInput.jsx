import plusIcon from '../../../assets/ic_plus.svg';

const ImageInput = () => {
  return (
    <>
      <label htmlFor="item-image" className="first-label">
        상품 이미지
      </label>
      <input type="file" id="item-image" name="item-image" />
      <button type="button" className="image-btn">
        <img src={plusIcon} alt="plusicon" />
        <span>이미지 등록</span>
      </button>
    </>
  );
};

export default ImageInput;
