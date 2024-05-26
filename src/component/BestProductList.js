import ProductItem from "./ProductItem";

function BestProductListItem({ product }) {
  return (
    <ProductItem
      src={product.images}
      name={product.name}
      price={product.price}
      favoriteCount={product.favoriteCount}
      size="282px"
    />
  );
}

function BestProductsList({ products }) {
  return (
    <div>
      <h2 className="products-list-title">베스트 상품</h2>
      <div className="row-list">
        {products.map((product) => {
          return (
            <div className="col-xl-3 col-md-4">
              <BestProductListItem product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestProductsList;
