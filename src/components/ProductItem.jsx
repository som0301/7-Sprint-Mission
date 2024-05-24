import "/src/styles/ProductItem.css";
import iconHeartEmpty from "/src/assets/ic_heart_empty_small.svg";
//import iconHeartFill from "/src/assets/ic_heart_fill.svg"; // 나중에 채워진 하트

function ProductItem({ className, src, name, price, favoriteCount, size }) {
  let priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className={className}>
      <img
        className="product-image"
        src={src}
        width={size}
        height={size}
        style={{ borderRadius: "16px" }}
      />
      <div className="product-inform">
        <p className="product-name">{name}</p>
        <p className="product-price">{`${priceComma}원`}</p>
        <div className="product-icon-heart-div">
          <img src={iconHeartEmpty} alt="하트" />
          <p className="product-favorite-count">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
