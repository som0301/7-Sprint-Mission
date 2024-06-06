import ProductItem from '/src/components/ProductItem';

function BestProductsListItem({ product, className }) {
  const { id, images, name, price, favoriteCount } = product;
  return (
    <ProductItem
      id={id}
      src={images}
      name={name}
      price={price}
      favoriteCount={favoriteCount}
      className={className}
    />
  );
}

function BestProductsList({ products, className }) {
  return (
    <div className={className}>
      <h2 className='products-list-title'>베스트 상품</h2>
      <div className='row'>
        {products.map((product) => {
          return (
            <div className='products-col best-products-col' key={product.id}>
              <BestProductsListItem
                className='best-product-item'
                product={product}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestProductsList;
