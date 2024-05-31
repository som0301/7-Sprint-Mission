import { useEffect, useState } from "react";
import search from "../images/search.svg";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { getReviews } from "../api";

function AllProductList() {
  const PC_ITEM = 10;
  const TABLET_ITEM = 6;
  const MOBILE_ITEM = 4;
  const [productList, setProductList] = useState([]);
  const [orderby, setOrderBy] = useState("recent"); //페이지 정렬 기준
  const [currentPage, setCurrentPage] = useState(1); //몇번째 페이지인지
  const [totalCount, setTotalCount] = useState(0); //전체 아이템 수
  const [pageSize, setPageSize] = useState(PC_ITEM); // 보이는 아이템 수
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [isDropDown, setIsDropDown] = useState(false);
  const handleNewestClick = () => setOrderBy("recent");
  const handleFavoriteClick = () => setOrderBy("favorite");

  const getAllProduct = async ({ currentPage, pageSize, orderby }) => {
    try {
      const data = await getReviews({ currentPage, pageSize, orderby });
      setProductList(data.list);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  const pageNumber = Math.ceil(totalCount / pageSize);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const changePageSize = () => {
    if (window.innerWidth >= 1200) {
      setPageSize(PC_ITEM);
      return;
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setPageSize(TABLET_ITEM);
      return;
    }
    if (window.innerWidth >= 375 && window.innerWidth <= 767) {
      setPageSize(MOBILE_ITEM);
      return;
    }
  };

  useEffect(() => {
    getAllProduct({ currentPage, pageSize, orderby });
  }, [orderby, pageSize, currentPage]);

  useEffect(() => {
    window.addEventListener("resize", changePageSize);
    return () => window.removeEventListener("resize", changePageSize);
  }, []);

  return (
    <div className="container">
      <div className="container-header">
        {window.innerWidth >= 375 && window.innerWidth <= 767 && (
          <div className="mobile-wrapper-top">
            <div className="mobile-wrapper-top-first">
              <h2>판매중인 상품</h2>
              <button className="button">
                <Link to="/additem" target="_blank" className="product-link">
                  상품 등록하기
                </Link>
              </button>
            </div>
            <div className="mobile-wrapper-bottom">
              <label className="all-label">
                <img src={search} alt="검색" width={"15px"} height={"15px"} />
                <div className="search-input">검색할 상품을 입력해주세요</div>
              </label>
              <select
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "recent") {
                    return handleNewestClick();
                  }
                  if (value === "favorite") {
                    return handleFavoriteClick();
                  }
                }}
              >
                <option value="recent" className="option-input">
                  최신순
                </option>
                <option value="favorite" className="option-input">
                  좋아요순
                </option>
              </select>
            </div>
          </div>
        )}
        {window.innerWidth >= 768 && window.innerWidth <= 1199 && (
          <div className="wrapper-top">
            <h2>판매중인 상품</h2>
            <div className="all-container-header">
              <label className="all-label">
                <img src={search} alt="검색" width={"15px"} height={"15px"} />
                <div className="search-input">검색할 상품을 입력해주세요</div>
              </label>
              <button className="button">
                <Link to="/additem" target="_blank" className="link">
                  상품 등록하기
                </Link>
              </button>
              <select
                id="sort-select"
                className="custom-select"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "recent") {
                    return handleNewestClick();
                  }
                  if (value === "favorite") {
                    return handleFavoriteClick();
                  }
                }}
              >
                <option value="recent" className="option-input">
                  최신순
                </option>
                <option value="favorite" className="option-input">
                  좋아요순
                </option>
              </select>
            </div>
          </div>
        )}
        {window.innerWidth >= 1200 && (
          <div className="wrapper-top">
            <h2>전체 상품</h2>
            <div className="all-container-header">
              <label className="all-label">
                <img src={search} alt="검색" width={"15px"} height={"15px"} />
                <div className="search-input">검색할 상품을 입력해주세요</div>
              </label>
              <button className="button">
                <Link to="/additem" target="_blank" className="link">
                  상품 등록하기
                </Link>
              </button>
              <select
                id="sort-select"
                className="custom-select"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "recent") {
                    return handleNewestClick();
                  }
                  if (value === "favorite") {
                    return handleFavoriteClick();
                  }
                }}
              >
                <option value="recent" className="option-input">
                  최신순
                </option>
                <option value="favorite" className="option-input">
                  좋아요순
                </option>
              </select>
            </div>
          </div>
        )}
      </div>
      <ul className="all-productlist">
        {productList.map((item) => (
          <ProductItem
            key={item.id}
            imgUrl={item.images[0]}
            name={item.name}
            price={item.price}
            favoriteCount={item.favoriteCount}
          />
        ))}
      </ul>
      <Pagination
        pageNumber={pageNumber}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default AllProductList;
