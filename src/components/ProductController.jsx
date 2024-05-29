import "../styles/ProductController.css";
import searchImg from "../assets/icons/ic_search.svg";
import SelectBox from "./SelectBox";

function ProductController({ order, handleSelect }) {
  return (
    <div className="ProductController">
      <p className="ProductController-title ProductController-pc-title">
        전체 상품
      </p>
      <p className="ProductController-title ProductController-mobile-title">
        판매 중인 상품
      </p>
      <div className="ProductController-control-section">
        <div className="ProductController-search-input">
          <img src={searchImg} />
          <input placeHolder="검색할 상품을 입력해주세요." />
        </div>
        <a href="/addItem" className="ProductController-btn-register-prod">
          상품 등록하기
        </a>
        <SelectBox handleSelect={handleSelect} />
      </div>
    </div>
  );
}

export default ProductController;
