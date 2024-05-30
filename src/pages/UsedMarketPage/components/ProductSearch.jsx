import React, { useState } from "react";
import "../../../styles/global.css";
import "../UsedMarketPage.css";
import { Link } from "react-router-dom";
import searchImg from "../../../assets/images/icons/ic_search.svg";
import useDeviceType from "../../../hooks/useDeviceType";
import dropdownImg from "../../../assets/images/icons/ic_sort.svg";
import { useSearchParams } from "react-router-dom";

const FAVORITE_ORDER = "favorite";
const RECENT_ORDER = "recent";

function ProductSearch({ onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState("최신순");
  const [isOpen, setIsOpen] = useState(false);

  const [searchParam, setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { getDeviceType } = useDeviceType();

  const deviceType = getDeviceType();

  const handleOptionClick = (option) => {
    setSelectedOption(option === FAVORITE_ORDER ? "좋아요순" : "최신순");
    onOptionChange(option);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="all-products-bar">
      <h1>전체 상품</h1>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="search-area">
            <img id="search-img" src={searchImg} alt="검색 돋보기" />
            <input
              id="search-input"
              type="text"
              name="keyword"
              value={keyword}
              onChange={handleKeywordChange}
              placeholder="검색할 상품을 입력해주세요"
            ></input>
          </div>
          <button id="add-item-button" className="blue-button button">
            <Link to="/additem">상품 등록하기</Link>
          </button>
        </form>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            {deviceType !== "mobile" ? selectedOption : null}

            {deviceType !== "mobile" && (
              <span className="arrow">{isOpen ? "▲" : "▼"}</span>
            )}
            {deviceType === "mobile" && (
              <img id="dropdown-img" src={dropdownImg} alt="드롭다운 버튼" />
            )}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleOptionClick(RECENT_ORDER)}>최신순</li>
              <li onClick={() => handleOptionClick(FAVORITE_ORDER)}>
                좋아요순
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
