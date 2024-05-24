import { useState } from "react";
import Button from "./common/Button";
import Dropdown from "./Dropdown";
import ProductItem from "./ProductItem";
import Search from "./Search";

function AllProductsListItem({ product }) {
  return (
    <ProductItem
      src={product.images}
      name={product.name}
      price={product.price}
      favoriteCount={product.favoriteCount}
    />
  );
}

function AllProductsList({ products, className }) {
  return (
    <div className={className}>
      <div className="all-products-header">
        <h2 className="products-list-title">전체 상품</h2>
        <div className="search-order-div">
          {/* .search-order-div 이 div에 마땅한 클래스네임을 모르겠다..*/}
          <Search className="input--color" />
          <Button className="btn btn-product-register">상품 등록하기</Button>
          {/* //TODO: 버튼 active 충돌 해결하기 */}
          <Dropdown />
        </div>
      </div>

      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-xl-3 col-md-4">
              <AllProductsListItem product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProductsList;
