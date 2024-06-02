import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import "../ProductItem.css";
import { getReviews } from "../api";

function BestProductList() {
  const [productList, setProductList] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderby,setOrderBy]=useState("favorite");

  const changeBestPageSize = () => {
    if (window.innerWidth >= 1200) {
      setPageSize(4);
      return;
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setPageSize(2);
      return;
    }
    if (window.innerWidth >= 375 && window.innerWidth <= 767) {
      setPageSize(1);
      return;
    }
  };

  const getBestProduct = async ({ curretPage, pageSize, orderby }) => {
    const data = await getReviews({ currentPage, pageSize, orderby });
    setProductList(data.list);
  };

  useEffect(() => {
    getBestProduct({ currentPage, pageSize, orderby });
  }, [orderby, pageSize, currentPage]);

  useEffect(() => {
    window.addEventListener("resize", changeBestPageSize);
    return () => window.removeEventListener("resize", changeBestPageSize);
  }, []);

  return (
    <div className="container best">
      <h2>베스트 상품</h2>
      <ul className="best-productlist">
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
    </div>
  );
}

export default BestProductList;
