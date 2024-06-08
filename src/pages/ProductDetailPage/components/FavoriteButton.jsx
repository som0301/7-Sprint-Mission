import "./FavoriteButton.css";
import iconFavorite from "../../../assets/images/icon_favorite.svg";

function FavoriteButton({ children }) {
  return (
    <button className="FavoriteButton">
      <img src={iconFavorite}></img>
      <p>{children}</p>
    </button>
  );
}

export default FavoriteButton;
