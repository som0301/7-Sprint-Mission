import React, { useState, useEffect } from "react";
import "./AllItemsSection.css";
import { getProducts } from "../../api";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";
import { searchIcon, dropDownIcon } from "../../assets/images";

const AllItemsSection = () => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [orderBy, setorderBy] = useState("recent");
  const [pageCount, setPageCount] = useState(1);
  const [buttons, setButtons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropDown, setIsDropDown] = useState(false);

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;
    const changePageSize = () => {
      if (windowInnerWidth >= 744 && windowInnerWidth < 1199) {
        setPageSize(6);
      } else if (windowInnerWidth < 744) {
        setPageSize(4);
      } else {
        setPageSize(10);
      }
    };
    window.addEventListener("resize", changePageSize);
    return () => {
      window.removeEventListener("resize", changePageSize);
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

  const handleChangeSort = (orderBy) => {
    setorderBy(orderBy);
    setIsDropDown(false);
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
          <div className="all-items-section-search-input-wrapper">
            <img
              className="icon-search"
              src={searchIcon}
              alt="상품검색창 돋보기아이콘"
            />
            <input
              className="all-items-section-search-input"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link to="/additem" className="all-items-section-product-add-button">
            상품 등록하기
          </Link>
          <div>
            <button
              className="all-items-section-sort-options-drop-down-button"
              onClick={() => setIsDropDown(!isDropDown)}
            >
              {orderBy === "recent" ? (
                <span>
                  최신순{" "}
                  <img
                    src={dropDownIcon}
                    alt="정렬기능을하는 드롭다운메뉴 아래화살표모양 아이콘"
                  />
                </span>
              ) : (
                <span>
                  좋아요순{" "}
                  <img
                    src={dropDownIcon}
                    alt="정렬기능을하는 드롭다운메뉴 아래화살표모양 아이콘"
                  />
                </span>
              )}
            </button>
            {isDropDown && (
              <div className="drop-down-menu">
                <button
                  className="all-items-section-sort-options-drop-down-button"
                  onClick={() => handleChangeSort("recent")}
                >
                  최신순
                </button>
                <button
                  className="all-items-section-sort-options-drop-down-button"
                  onClick={() => handleChangeSort("favorite")}
                >
                  좋아요순
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ul className="all-items-section-content">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            imageClassName={"all-items-section-image"}
          />
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
