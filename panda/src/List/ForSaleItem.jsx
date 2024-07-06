import React from 'react';
import styles from './ForSale.module.css';

const ForSaleItem = ({ name, price, images, favoriteCount }) => {
  return (
    <div className={styles.ForSaleItemCard}>
      <img className={styles.img} src={images} alt="베스트상품이미지" />
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price.toLocaleString('ko-KR')}원</div>
      <div className={styles.Count}>{favoriteCount}</div>
    </div>
  );
};

export default ForSaleItem;
