import { useState, useEffect } from "react";
import { getItems } from "../api.js";

function PrintAllItems() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const items = await getItems({ pageSize: 10, orderBy: "recent" });
    setItems(items.list);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h1>전체 아이템</h1>
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

export default PrintAllItems;
