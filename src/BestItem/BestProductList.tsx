import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import "../ProductItem.css";
import { getReviews } from "../api";
import { Link } from "react-router-dom";

interface ListProps{
  currentPage:number;
  pageSize:number;
  orderby:string;
}

function BestProductList() {
  const [productList, setProductList] = useState<any[]>([]);
  const [pageSize, setPageSize] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [orderby, setOrderBy] = useState<string>("favorite");

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

  const getBestProduct = async ({ currentPage, pageSize, orderby }:ListProps) => {
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
      <h2 className="productlist-h2">베스트 상품</h2>
      <ul className="best-productlist">
        {productList.map((item) => (
          <Link to={`./${item.id}`} key={item.id} className="link">
            <ProductItem
              imgUrl={item.images[0]}
              name={item.name}
              price={item.price}
              favoriteCount={item.favoriteCount}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default BestProductList;
