import React from "react";
import "./ItemCard.css";
import { favoriteIcon } from "../../assets/images/index";
import { Link } from "react-router-dom";

const ItemCard = ({ item, imageClassName }) => {
  const { id, images, name, price, favoriteCount } = item;
  return (
    <Link to={`/items/${id}`} className="item-card-container">
      <img
        className={`item-card-image ${imageClassName}`}
        src={images}
        alt={`${name} 이미지`}
      />
      <h2 className="item-card-name">{name}</h2>
      <h2 className="item-card-price">{price.toLocaleString()}원</h2>
      <h3 className="item-card-favorite-count">
        <img src={favoriteIcon} alt="좋아요기능 하트모양 아이콘" />
        {favoriteCount}
      </h3>
    </Link>
  );
};

export default ItemCard;
