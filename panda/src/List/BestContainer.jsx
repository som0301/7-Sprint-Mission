import React, { useState, useEffect } from 'react';
import BestItem from './BestItem';
import { getBestItem } from '../Api/getProduct';
import styles from './Best.module.css';
import useItemsCountPerPage from '../Hooks/UseItemCountPerPage';

const BestContainer = () => {
  const [items, setItems] = useState([]);
  const itemsCountPerPage = useItemsCountPerPage(4, 2, 1);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await getBestItem(itemsCountPerPage);
      setItems(result.list);
    };

    fetchItems();
  }, [itemsCountPerPage]);

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
