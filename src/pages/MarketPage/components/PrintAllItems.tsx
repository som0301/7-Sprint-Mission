import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../../../api/itemApi";
import React from "react";
import ItemBox, { Item } from "./ItemBox";
import "../MarketPage.css";

const PrintAllItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

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
          <ItemBox items={items} type='all' />
        </div>
      </div>
    </div>
  );
};

export default PrintAllItems;
