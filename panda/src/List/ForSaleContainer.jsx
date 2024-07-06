import React, { useEffect, useState } from 'react';
import ForSaleItem from './ForSaleItem';
import Pagination from 'react-js-pagination';
import { getForSaleItem } from '../Api/getProduct';
import styles from './ForSale.module.css';
import useItemsCountPerPage from '../Hooks/UseItemCountPerPage';

const ForSaleContainer = () => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [totalCount, setTotalCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const itemsCountPerPage = useItemsCountPerPage(10, 6, 4);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await getForSaleItem(
        currentPage,
        itemsCountPerPage,
        order,
        search
      );
      setItems(result.list);
      setTotalCount(result.totalCount);
    };
    fetchItems();
  }, [currentPage, itemsCountPerPage, order, search]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>판매 중인 상품</h1>
        <div>
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={search}
            onChange={handleSearchChange}
          />
          <button>상품 등록하기</button>
          <select
            name="order"
            id="order"
            value={order}
            onChange={handleOrderChange}
          >
            <option value="recent">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>
      <div className={styles.ForSaleContainer}>
        {items.map((item) => (
          <ForSaleItem key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass={styles.pageItem}
          linkClass={styles.pageLink}
          activeClass={styles.activeLink}
          activeLinkClass={styles.activeLink}
          disabledClass={styles.disabledLink}
          innerClass={styles.pagination}
        />
      </div>
    </div>
  );
};

export default ForSaleContainer;
