import React, { useState, useEffect } from "react";
import { getItems } from "../../../api/itemApi";
import ItemBox, { Item } from "./ItemBox";
import { Button } from "../../../components/Button/Button";
import Pagination from "react-js-pagination";
import "../MarketPage.css";

const PrintAllItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [orderBy, setOrderBy] = useState<string>("recent");
  const itemsPerPage: number = 10;

  const loadItems = async (orderBy: string) => {
    const items = await getItems({ pageSize: 100, orderBy });
    setItems(items.list);
  };

  useEffect(() => {
    loadItems(orderBy);
  }, []);

  const handleButtonClick = (url: string) => () => {
    window.location.href = url;
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleOrderByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
    loadItems(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='box-items'>
      <header>
        <span>전체 상품</span>
        <input
          className='search-input'
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
        <select
          className='order-select'
          value={orderBy}
          onChange={handleOrderByChange}
        >
          <option value='recent'>최신순</option>
          <option value='favorite'>인기순</option>
        </select>
      </header>
      <div className='container-items'>
        <div className='all-items'>
          <ItemBox items={currentItems} type='all' />
        </div>
      </div>

      <Pagination
        activePage={currentPage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={filteredItems.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass='page-item'
        linkClass='page-link'
      />
    </div>
  );
};

export default PrintAllItems;
