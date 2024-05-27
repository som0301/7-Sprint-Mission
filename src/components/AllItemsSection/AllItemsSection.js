import React, { useState, useEffect } from "react";
import "./AllItemsSection.css";
import { getProducts } from "../../api";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";

const AllItemsSection = () => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [orderBy, setorderBy] = useState("recent");
  const [pageCount, setPageCount] = useState(1);
  const [buttons, setButtons] = useState([]);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageSize, setImageSize] = useState({
    imageWidth: "221px",
    imageHeight: "221px",
  });

  const changeWindowInnerWidth = (windowInnerWidth) => {
    if (windowInnerWidth >= 744 && windowInnerWidth < 1199) {
      setPageSize(6);
    } else if (windowInnerWidth < 744) {
      setPageSize(4);
      setImageSize({ imageWidth: "168px", imageHeight: "168px" });
    } else {
      setPageSize(10);
      setImageSize({ imageWidth: "221px", imageHeight: "221px" });
    }
  };

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    changeWindowInnerWidth(windowInnerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLoad = async ({ page, pageSize, orderBy }) => {
    const productsData = await getProducts({ page, pageSize, orderBy });
    setItems(productsData.list);
    setPageCount(Math.ceil(productsData.totalCount / pageSize));
  };

  const createPageButtonArray = () => {
    const buttonArray = [];
    for (let i = 1; i <= pageCount; i++) {
      buttonArray.push(i);
    }
    return setButtons(buttonArray);
  };

  const handlePageClick = (e) => {
    const pageNum = Number(e.target.value);
    setPage(pageNum);
    setCurrentPage(pageNum);
  };

  const handleChangeSort = (e) => {
    setorderBy(e.target.value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setPage(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    handleLoad({ page, pageSize, orderBy });
  }, [page, pageSize, orderBy]);

  useEffect(() => {
    createPageButtonArray();
  }, [pageCount]);

  return (
    <section className="all-items-section-container">
      <div className="all-items-section-header">
        <h1 className="all-items-section-title">전체상품</h1>
        <div className="all-items-section-toolbar">
          <input
            className="all-items-section-search-input"
            placeholder="검색할 상품을 입력해주세요"
          />
          <Link to="/additem" className="all-items-section-product-add-button">
            상품 등록하기
          </Link>
          <select
            className="all-items-section-sort-options-select"
            onChange={handleChangeSort}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <ul className="all-items-section-content">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} imageSize={imageSize} />
        ))}
      </ul>
      <div className="all-items-section-paination-wrapper">
        <button
          className="all-items-section-paination-button"
          onClick={handlePreviousPage}
        >
          &lt;
        </button>
        {buttons.map((pageNum) => (
          <button
            key={pageNum}
            className={`all-items-section-paination-button ${
              pageNum == currentPage ? "select-page" : ""
            }`}
            value={pageNum}
            onClick={handlePageClick}
          >
            {pageNum}
          </button>
        ))}
        <button
          className="all-items-section-paination-button"
          onClick={handleNextPage}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default AllItemsSection;
