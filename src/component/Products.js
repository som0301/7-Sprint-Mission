import "./common.css";
import "./Products.css";

// 가격표시 형식 변환
function formatPrice(price) {
  return new Intl.NumberFormat("ko-KR").format(price);
}

function ProductList({ product }) {
  return (
    <div className="ProductList">
      <img src={product.images} alt={product.name} />
      <div className="description">
        <p>{product.name}</p>
        <p className="productPrice">{formatPrice(product.price)}원</p>
        <p>{product.favoriteCount}</p>
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
