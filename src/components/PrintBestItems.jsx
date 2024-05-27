import React from "react";
import { useEffect, useState } from "react";
import { getItems } from "../api.js";

function PrintBestItems() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const items = await getItems({ orderBy: "favorite" });
    setItems(items.list);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h1>베스트 아이템</h1>
      <ul>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.images[0]} alt={item.name} width='280px' />
              <div>{item.name}</div>
              <div>{item.price}원</div>
              <div>{item.favoriteCount}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default PrintBestItems;
