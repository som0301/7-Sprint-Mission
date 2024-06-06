import favoriteHeart from "../../assets/images/icon-heart.png";

function ProductItem({ className, src, name, price, favoriteCount, size }) {
  return (
    <div className={"product-item"}>
      <img
        className={`${className} product-image`}
        src={src}
        style={{ borderRadius: "16px" }}
        alt="사진"
      />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}원</p>
        <p className="favoritteCount">
          <img src={favoriteHeart} alt="favoriteHeart" />
          {favoriteCount}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
