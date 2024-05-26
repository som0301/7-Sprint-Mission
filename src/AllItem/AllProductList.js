import { useEffect, useState } from "react";
import search from "../images/search.svg";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

function formatNumber(number) {
  return new Intl.NumberFormat("ko-KR").format(number);
}

function AllProductList() {
  const [order, setOrder] = useState("updatedAt");
  const [productList, setProductList] = useState([]);

  const handleNewestClick = () => setOrder("updatedAt");

  const handleFavoriteClick = () => setOrder("favoriteCount");

  useEffect(() => {
    fetch("https://panda-market-api.vercel.app/products?page=1&pageSize=12&sort=${order}")
      .then((data) => data.json())
      .then((result) => {
        setProductList(result.list);
        console.log(result.list);
      });
  }, [order]);

  console.log(order);

  return (
    <div className="container">
      <div className="container-header">
        <h2>전체 상품</h2>
        <div className="all-container-header">
          <label>
            <img src={search} alt="검색" width={"15px"} height={"15px"} />
            <div className="search-input">검색할 상품을 입력해주세요</div>
          </label>
          <button>
            <Link to="/additem" target="_blank" className="link">
              상품 등록하기
            </Link>
          </button>
          <select
            id="sort-select"
            className="custom-select"
            onChange={(e) => {
              if (e.target.value === "latest") {
                handleNewestClick();
              } else {
                handleFavoriteClick();
              }
            }}
          >
            <option value="latest" className="option-input">
              최신순
            </option>
            <option value="likes" className="option-input">
              좋아요순
            </option>
          </select>
        </div>
      </div>
      <ul className="all-productlist">
        {productList.map((item) => (
          <ProductItem
            key={item.id}
            imgUrl={item.images[0]}
            name={item.name}
            price={formatNumber(item.price)}
            favoriteCount={item.favoriteCount}
          />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}

export default AllProductList;
