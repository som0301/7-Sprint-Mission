import React, { useState } from "react";
import "../styles/global.css";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import searchImg from "../assets/images/icons/ic_search.svg";

function ProductSearch({ onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState("최신순");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionChange(option);
    setIsOpen(false);
  };

  return (
    <div className="all-products-bar">
      <h1>전체 상품</h1>
      <div className="search-bar">
        <div className="search-area">
          <img id="search-img" src={searchImg} alt="검색 돋보기" />
          <input
            id="search-input"
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          ></input>
        </div>
        <button id="add-item-button" className="blue-button button">
          <Link to="/additems">상품 등록하기</Link>
        </button>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            {selectedOption}
            <span className="arrow">{isOpen ? "▲" : "▼"}</span>
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleOptionClick("최신순")}>최신순</li>
              <li onClick={() => handleOptionClick("좋아요순")}>좋아요순</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
