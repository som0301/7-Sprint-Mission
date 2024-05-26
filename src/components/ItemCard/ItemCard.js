import React from "react";
import "./ItemCard.css";
import { favoriteIcon } from "../../assets/images/index";

const ItemCard = ({ item, imageSize }) => {
  const { images, name, price, favoriteCount } = item;
  const { imageWidth, imageHeight } = imageSize;
  return (
    <div className="item-card-container">
      <img
        className="item-card-image"
        style={{ width: imageWidth, height: imageHeight }}
        src={images}
        alt={`${name} 이미지`}
      />
      <h2 className="item-card-name">{name}</h2>
      <h2 className="item-card-price">{price}</h2>
      <h3 className="item-card-favorite-count">
        <img src={favoriteIcon} alt="좋아요기능 하트모양 아이콘" />
        {favoriteCount}
      </h3>
    </div>
  );
};

export default ItemCard;
