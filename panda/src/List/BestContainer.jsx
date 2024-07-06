import React, { useState, useEffect } from 'react';
import BestItem from './BestItem';
import { getBestItem } from '../Api/getProduct';
import styles from './Best.module.css';

const BestContainer = () => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await getBestItem(pageSize);
      setItems(result.list);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>베스트 상품</h1>
      <div className={styles.BestContainer}>
        {items.map((item) => (
          <BestItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BestContainer;
