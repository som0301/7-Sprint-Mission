import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <header>
        <h1>전체 상품</h1>
        <Link to='/additem' className='add-item-button'>
          상품 등록하기
        </Link>
      </header>
      <div className='container-items'>
        <div className='all-items'>
          <ItemBox items={items} type='allitem' />
        </div>
      </div>
    </div>
  );
}

export default PrintAllItems;
