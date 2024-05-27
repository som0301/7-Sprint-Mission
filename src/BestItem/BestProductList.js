import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import "../ProductItem.css";

function formatNumber(number) {
  return new Intl.NumberFormat('ko-KR').format(number);
}

function BestProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
    )
      .then((data) => data.json())
      .then((result) => {
        setProductList(result.list);
        console.log(result.list);
      });
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
            price={formatNumber(item.price)}
            favoriteCount={item.favoriteCount}
          />
        ))}
      </ul>
    </div>
  );
}

export default BestProductList;
