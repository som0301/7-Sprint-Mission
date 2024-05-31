import { useState, useEffect } from "react";
import { getItems } from "../api.js";
import ItemBox from "./ItemBox";
import "../pages/MarketPage.css";

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
    <div className='container-items'>
      <h1>전체 상품</h1>
      <div className='all-items'>
        <ItemBox items={items} />
      </div>
    </div>
  );
}

export default PrintAllItems;
