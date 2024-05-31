import { useState } from "react";
import ProductItem from "./ProductItem";

function AllProductListItem({ product, className }) {
  return (
    <ProductItem
      src={product.images}
      name={product.name}
      price={product.price}
      favoriteCount={product.favoriteCount}
      className="All"
    />
  );
}

function AllproductsList({ products, className }) {
  const [sortOption, setSortOption] = useState("recent");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const SortedProducts = [...products].sort((a, b) => {
    if (sortOption === "favorite") {
      return b.favoriteCount - a.favoriteCount;
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <div className={className}>
      <div className="all-products-Navbar">
        <div className="all-products-Navbar-box">
          <h2 className="products-list-title">전체 상품</h2>
          <div className="all-products-Nav">
            <input
              className="search"
              placeholder="검색할 상품을 입력해  주세요."
            />
            <button className="small-button">상품 등록하기</button>
            <select
              className="drop-down"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid-list all">
        {SortedProducts.map((product) => {
          return <AllProductListItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default AllproductsList;
