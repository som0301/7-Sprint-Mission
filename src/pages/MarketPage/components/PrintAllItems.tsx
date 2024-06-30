import React, { useState, useEffect } from "react";
import { getItems } from "../../../api/itemApi";
import ItemBox, { Item } from "./ItemBox";
import { Button } from "../../../components/Button/Button";
import "../MarketPage.css";

const PrintAllItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>("");

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredItems = items.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='box-items'>
      <header>
        <span>전체 상품</span>
        <input
          className="search-input"
          type='text'
          placeholder='검색할 상품을 입력해주세요'
          value={search}
          onChange={handleSearchChange}
        />
        <Button
          text='상품 등록하기'
          size='small'
          width=''
          onClick={handleButtonClick("/addItem")}
        />
      </header>
      <div className='container-items'>
        <div className='all-items'>
          <ItemBox items={filteredItems} type='all' />
        </div>
      </div>
    </div>
  );
};

export default PrintAllItems;