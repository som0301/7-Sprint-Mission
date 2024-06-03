import "./ItemCard.css";
import iconLike from "../../../assets/images/icon_favorite.svg";

function ItemCard({ className = "", images, name, price, favoriteCount }) {
  const classNames = `ItemCard ${className}`;

  return (
    <div className={classNames}>
      <div className="ItemCard-image">
        <img src={images} alt={`${name} 이미지`} />
      </div>
      <h2 className="ItemCard-title">{name}</h2>
      <p className="ItemCard-price">{price}</p>
      <div className="ItemCard-like">
        <img className="ItemCard-like-icon" src={iconLike}></img>
        <p className="ItemCard-like-count">{favoriteCount}</p>
      </div>
    </div>
  );
}

export default ItemCard;
