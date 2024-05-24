import ProductItem from "./ProductItem";

function BestProductsListItem({ product }) {
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

function BestProductsList({ products, className }) {
  return (
    <div className={className}>
      <h2 className="products-list-title">베스트 상품</h2>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-xl-3 col-md-4">
              <BestProductsListItem product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestProductsList;
