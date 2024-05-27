import { useState, useEffect } from "react";
import { getItems } from "../api.js";
import ItemBox from "./ItemBox";

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
      <h1>전체 상품</h1>
      <ItemBox items={items} />
    </div>
  );
}

export default PrintAllItems;
