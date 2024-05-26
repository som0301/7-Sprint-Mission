import React, { useState, useEffect } from "react";
import "./AllItemsSection.css";
import { getProducts } from "../../api";
import ItemCard from "../ItemCard/ItemCard";

const AllItemsSection = () => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [orderBy, setorderBy] = useState("recent");
  const [pageCount, setPageCount] = useState(1);
  const [buttons, setButtons] = useState([]);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const imageSize = {
    imageWidth: "221px",
    imageHeight: "221px",
  };

  const changePageSize = (windowInnerWidth) => {
    if (windowInnerWidth < 1199 && windowInnerWidth > 744) {
      setPageSize(6);
    } else if (windowInnerWidth < 744) {
      setPageSize(4);
    } else {
      setPageSize(10);
    }
  };

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    changePageSize(windowInnerWidth);
    window.addEventListener("resize", handleResize);
  }, [windowInnerWidth]);

  const handleLoad = async ({ page, pageSize, orderBy }) => {
    const productsData = await getProducts({ page, pageSize, orderBy });
    setItems(productsData.list);
    setPageCount(Math.ceil(productsData.totalCount / pageSize));
    console.log(pageCount);
  };

  const createPageButtonArray = () => {
    const buttonArray = [];
    for (let i = 1; i <= pageCount; i++) {
      buttonArray.push(i);
    }
    return setButtons(buttonArray);
  };

  const handleChangePage = (e) => {
    setPage(e.target.value);
  };

  const handleChangeSort = (e) => {
    setorderBy(e.target.value);
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
          <button className="all-items-section-product-add-button">
            상품 등록하기
          </button>
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
        <button className="all-items-section-paination-button">&lt;</button>
        {buttons.map((pageNum) => (
          <button
            key={pageNum}
            className="all-items-section-paination-button"
            value={pageNum}
            onClick={handleChangePage}
          >
            {pageNum}
          </button>
        ))}
        <button className="all-items-section-paination-button">&gt;</button>
      </div>
    </section>
  );
};

export default AllItemsSection;
