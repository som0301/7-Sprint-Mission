import "../styles/common.css";
import "../styles/Products.css";

// 가격표시 형식 변환
function formatPrice(price) {
  return new Intl.NumberFormat("ko-KR").format(price);
}

function ProductList({ product }) {
  const { images, name, price, favoriteCount } = product;
  return (
    <div className="ProductList">
      <img src={images} alt={product.name} />
      <div className="description">
        <p>{name}</p>
        <p className="productPrice">{formatPrice(price)}원</p>
        <p>{favoriteCount}</p>
      </div>
    </div>
  );
}

function Products({ products }) {
  return (
    <>
      <div className="bestProducts subject">
        <div>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <ProductList product={product} />
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
