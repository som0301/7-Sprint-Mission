import "../styles/ProductController.css";
import { Link } from "react-router-dom";
import searchImg from "../assets/icons/ic_search.svg";
import SelectBox from "./SelectBox";

function ProductController({ order, handleSelect }) {
  const selectList = ["최신순", "좋아요순"];

  return (
    <div className="product-controller">
      <p className="title pc-title">전체 상품</p>
      <p className="title mobile-title">판매 중인 상품</p>
      <div className="control-section">
        <div className="search-input">
          <img src={searchImg} />
          <input placeHolder="검색할 상품을 입력해주세요." />
        </div>
        <Link to="/addItem" className="btn-register-prod">
          상품 등록하기
        </Link>
        <SelectBox handleSelect={handleSelect} selectList={selectList} />
      </div>
    </div>
  );
}

export default ProductController;
