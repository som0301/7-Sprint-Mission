import "../style/addItem.css";

function AddItemInput() {
  return (
    <>
      <index className="input-title">상품명</index>
      <input
        className="input-box "
        type="text"
        placeholder="상품명을 입력해주세요"
      />
      <index className="input-title">상품소개</index>
      <textarea
        className="input-box textarea"
        type="text-area"
        placeholder="상품소개를 입력해주세요"
      />
      <index className="input-title">판매가격</index>
      <input
        className="input-box "
        type="number"
        placeholder="판매 가격을 입력해주세요"
      />
    </>
  );
}

export default AddItemInput;
