import ProductItem from "./ProductItem";

function AllProductListItem({ product, className }) {
  return (
    <ProductItem
      src={product.images}
      name={product.name}
      price={product.price}
      favoriteCount={product.favoriteCount}
      className="All"
    />
  );
}

function AllproductsList({ products, className }) {
  return (
    <div className={className}>
      <h2 className="products-list-title">전체 상품</h2>
      <div className="row-list">
        {products.map((product) => {
          return <AllProductListItem product={product} />;
        })}
      </div>
    </div>
  );
}

export default AllproductsList;
