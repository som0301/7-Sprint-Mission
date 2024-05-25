import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "./common/Button";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import ProductItem from "./ProductItem";
import Search from "./Search";

import {
  AllProductsListHeader,
  MobileAllProductsListHeader,
} from "./AllProductsListHeader";

import { useResponsiveApi } from "/src/Responsive";

function AllProductsListItem({ product, className }) {
  const [order, setOrder] = useState("recent");

  return (
    <ProductItem
      src={product.images}
      name={product.name}
      price={product.price}
      favoriteCount={product.favoriteCount}
      size="221px"
      className={className}
    />
  );
}

function AllProductsList({
  products,
  className,
  setOrder,
  order,
  handleProductsLoad,
  setPage,
  page,
}) {
  const { isMobile } = useResponsiveApi();
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate("/additem");
  };

  return (
    <div className={className}>
      {isMobile ? (
        <MobileAllProductsListHeader
          onClick={handleAddProduct}
          order={order}
          setOrder={setOrder}
        />
      ) : (
        <AllProductsListHeader
          onClick={handleAddProduct}
          order={order}
          setOrder={setOrder}
        />
      )}

      <div className="row">
        {products.map((product) => {
          return (
            <div className="products-col all-products-col">
              <AllProductsListItem
                className="all-product-item"
                product={product}
              />
            </div>
          );
        })}
      </div>
      <div className="pagination-div">
        <Pagination
          handleProductsLoad={handleProductsLoad}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}

export default AllProductsList;
