import React from "react";
import styles from "./ItemDetail.module.css";
import { Item } from "../../../types";

interface ItemDetailProps {
  item: Item;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  return (
    <div className={styles.header}>
      {item.images.length > 0 && (
        <img src={item.images[0]} alt={item.name} className={styles.image} />
      )}
      <div className={styles.details}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.price}>{item.price.toLocaleString()}원</div>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
        <div className={styles.heart}>♡ {item.favoriteCount}</div>
      </div>
    </div>
  );
};

export default ItemDetail;
