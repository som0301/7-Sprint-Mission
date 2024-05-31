import AddItemHeader from "../AddItem/AddItemHeader";
import "./AddItemList.css";

function AddItemList() {
  return (
    <div>
      <AddItemHeader />

      <div className="add-top">
        <h2>상품 등록하기</h2>
        <button className="add">등록</button>
      </div>
      <div className="add-total">
      <div className="add-product image">

        <label className="add-label">상품 이미지</label>
        <div></div>
      </div>

      <div className="add-product name">
        <label className="add-label" for="product-name">상품명</label>
        <input id="product-name" type="text" placeholder="상품명을 입력해주세요"></input>
      </div>

      <div className="add-product introduce">
        <label className="add-label" for="product-introduce">상품 소개</label>
        <input id="product-introduce" type="text" placeholder="상품 소개를 입력해주세요"></input>
      </div>

      <div className="add-product price">
        <label className="add-label" for="product-price">판매 가격</label>
        <input id="product-price" type="text" placeholder="판매 가격을 입력해주세요"></input>
      </div>

      <div className="add-product tag">
        <label className="add-label" for="product-tag">태그</label>
        <input id="product-tag" type="text" placeholder="태그를 입력해주세요"></input>
      </div>
      </div>
    </div>
  );
}

export default AddItemList;
