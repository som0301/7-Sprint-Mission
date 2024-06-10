import AllItemList from "./AllItemList";
import Dropdown from "./Dropdown";
import "../styles/AllItem.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";
import useResponsive from "../hooks/useResponsive";

function MobileAllItem({ filter, changeFilter }) {
  return (
    <div className="all-item-wrapper">
      <div className="all-item-mobile-wrapper">
        <label className="all-item-label">전체 상품</label>
        <Link to="/additem">
          <button className="all-item-button">상품 등록하기</button>
        </Link>
      </div>
      <div className="all-item-mobile-input-dropdown-wrapper">
        <input
          className="all-item-input"
          placeholder="검색할 상품을 입력해주세요"
        />
        <Dropdown filter={filter} changeFilter={changeFilter} />
      </div>
    </div>
  );
}

function AllItem() {
  const [filter, setFilter] = useState("recent");
  const [page, setPage] = useState(1);
  const { isMobile } = useResponsive();

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="all-item-container">
      {isMobile ? (
        <MobileAllItem />
      ) : (
        <div className="all-item-wrapper">
          <label className="all-item-label">전체 상품</label>
          <div className="all-item-input-button-container">
            <input
              className="all-item-input"
              placeholder="검색할 상품을 입력해주세요"
            />
            <Link to="/additem">
              <button className="all-item-button">상품 등록하기</button>
            </Link>
            <Dropdown filter={filter} changeFilter={changeFilter} />
          </div>
        </div>
      )}
      <AllItemList
        filter={filter}
        page={page}
      />
      <Pagination currentPage={page} setPage={setPage} />
    </div>
  );
}

export default AllItem;
