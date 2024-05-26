function ProductItem({ className, src, name, price, favoriteCount, size }) {
  return (
    <div className="product-item">
      <img
        className="product-image"
        src={src}
        style={{ borderRadius: "16px" }}
        alt="사진"
      />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}원</p>
      </div>
    </div>
  );
}

export default ProductItem;
