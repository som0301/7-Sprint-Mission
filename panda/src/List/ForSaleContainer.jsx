import React, { useEffect, useState } from 'react';
import ForSaleItem from './ForSaleItem';
import Pagination from 'react-js-pagination';
import { getForSaleItem } from '../Api/getProduct';
import styles from './ForSale.module.css';

const ForSaleContainer = () => {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [totalCount, setTotalCount] = useState();
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const updateItemsCountPerPage = () => {
    const width = window.innerWidth;
    if (width <= 375) {
      setItemsCountPerPage(4);
    } else if (width <= 744) {
      setItemsCountPerPage(6);
    } else {
      setItemsCountPerPage(10);
    }
  };

  useEffect(() => {
    updateItemsCountPerPage();
    window.addEventListener('resize', updateItemsCountPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsCountPerPage);
    };
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await getForSaleItem(
        currentPage,
        itemsCountPerPage,
        order
      );
      setItems(result.list);
      setTotalCount(result.totalCount);
    };
    fetchItems();
  }, [currentPage, itemsCountPerPage, order]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>판매 중인 상품</h1>
        <div>
          <input type="text" placeholder="검색할 상품을 입력해주세요" />
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
