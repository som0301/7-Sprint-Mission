import React, { useEffect, useState } from "react";
import ItemBox, { Item } from "./ItemBox";
import { getItems } from "../../../api/itemApi";
import "../MarketPage.css";

const PrintBestItems: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const loadItems = async () => {
    const items = await getItems({ orderBy: "favorite" });
    setItems(items.list);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className='container-items'>
      <h1>베스트 상품</h1>
      <div className='best-items'>
        <ItemBox items={items} type='best' />
      </div>
    </div>
  );
};

export default PrintBestItems;
