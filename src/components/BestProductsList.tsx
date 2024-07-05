import ProductItem from '@components/ProductItem';

interface Product {
  id: number;
  images: string;
  name: string;
  price: string;
  favoriteCount: string;
}

interface ItemProps {
  product: Product;
  className: string;
}

function BestProductsListItem({ product, className }: ItemProps) {
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

interface ListProps {
  products: Product[];
  className: string;
}

function BestProductsList({ products, className }: ListProps) {
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
