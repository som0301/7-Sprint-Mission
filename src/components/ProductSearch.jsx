import React, { useState } from "react";
import "../styles/global.css";
import "./ProductPage.css";

function ProductSearch() {
  const [selectedOption, setSelectedOption] = useState("최신순");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="search-bar">
      <input id="search-input"></input>
      <button className="blue-button button">상품 등록하기</button>
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
  );
}

export default ProductSearch;
