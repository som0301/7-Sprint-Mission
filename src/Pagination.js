import arrowleft from "../src/images/arrow_left.svg";
import arrowright from "../src/images/arrow_right.svg";
import "./pagination.css";
import { useState } from "react";

function getPageNumber(number) {
  const numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return [...numbers];
}


function Pagination(pageNumber, currentPage, onPageChange) {
  const getPageNumberArray = getPageNumber(pageNumber);
  console.log(getPageNumberArray);
  const handlePageLoad = () => {};
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pageNumber) {
      onPageChange(newPage);
    }
  };
  const handleLodePage = (pageNumber) => {
    onPageChange(pageNumber);
  };
  return (
    <div className="button-wrapper">
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <img src={arrowleft} alt="왼쪽 화살표" />
      </button>
      {getPageNumberArray.map((pageNumber) => (
        <button
          className={`pagination-button ${
            pageNumber === currentPage ? "select-page" : ""
          }`}
          onClick={() => handleLodePage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <img src={arrowright} alt="오른쪽 화살표" />
      </button>
    </div>
  );
}

export default Pagination;
