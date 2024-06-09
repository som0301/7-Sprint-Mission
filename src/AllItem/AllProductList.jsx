import { useEffect, useState } from "react";
import search from "../images/search.svg";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import { getReviews } from "../api";

const PC_ITEM = 10;
const TABLET_ITEM = 6;
const MOBILE_ITEM = 4;

function AllProductList() {
  const [productList, setProductList] = useState([]);
  const [orderby, setOrderBy] = useState("recent"); //페이지 정렬 기준
  const [currentPage, setCurrentPage] = useState(1); //몇번째 페이지인지
  const [totalCount, setTotalCount] = useState(0); //전체 아이템 수
  const [pageSize, setPageSize] = useState(PC_ITEM); // 보이는 아이템 수
  const [isDropDown, setIsDropDown] = useState(false);

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
    <>
      {window.innerWidth >= 768 && (
        <div className="container">
          <div className="container-header">
            <div className="wrapper-top">
              <h2 className="title-text-pc">전체 상품</h2>
              <h2 className="title-text-tm">판매중인 상품</h2>
              <div className="all-container-header">
                <div className="all-label">
                  <img src={search} alt="검색" width="15px" height="15px" />
                  <input
                    className="search-input"
                    placeholder="검색할 상품을 입력해주세요"
                  />
                </div>
                <button className="button">
                  <Link to="/additem" className="product-link">
                    상품 등록하기
                  </Link>
                </button>
                <select
                  id="sort-select"
                  className="custom-select"
                  onChange={(e) => {
                    setOrderBy(e.target.value);
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
          </div>
        </div>
      )}
      {window.innerWidth <= 767 && (
        <div className="container">
          <div className="container-header">
            <div className="wrapper-top">
              <h2 className="title-text-tm">판매중인 상품</h2>
              <button className="button">
                <Link to="/additem" className="product-link">
                  상품 등록하기
                </Link>
              </button>
            </div>
            <div className="wrapper-bottom">
              <div className="all-label">
                <img src={search} alt="검색" width="15px" height="15px" />
                <input
                  className="search-input"
                  placeholder="검색할 상품을 입력해주세요"
                />
              </div>
              <select
                id="sort-select"
                className="custom-select"
                onChange={(e) => {
                  setOrderBy(e.target.value);
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
        </div>
      )}
      <ul className="all-productlist">
        {productList.map((item) => (
          <Link to={`./${item.id}`} key={item.id} className="link">
            <ProductItem
              key={item.id}
              imgUrl={item.images[0]}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            />
          </Link>
        ))}
      </ul>
      <Pagination
        pageNumber={pageNumber}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default AllProductList;
