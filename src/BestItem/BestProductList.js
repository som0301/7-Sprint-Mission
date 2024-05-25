import { useEffect } from "react";
import BestProductItem from "./BestProductItem";
import "./BestProductItem.css";
import { useState } from "react";

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
    <div className="best-container">
      <h2>베스트 상품</h2>
      <ul className="bestproductlist">
        {productList.map((item) => (
          <BestProductItem
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
