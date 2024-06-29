import { useState, useEffect } from "react";
import { getItems } from "../../../api/itemApi";
import React from "react";
import ItemBox, { Item } from "./ItemBox";
import { Button } from "../../../components/Button/Button";
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

  const handleButtonClick = (url: string) => () => {
    window.location.href = url;
  };

  return (
    <body>
      <header>
        <span>전체 상품</span>
        <Button
          text='상품 등록하기'
          size='small'
          width=''
          onClick={handleButtonClick("/addItem")}
        />
      </header>
      <div className='container-items'>
        <div className='all-items'>
          <ItemBox items={items} type='all' />
        </div>
      </div>
    </body>
  );
};

export default PrintAllItems;
