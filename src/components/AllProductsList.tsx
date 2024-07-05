import { useNavigate } from 'react-router-dom';
import Pagination from '@components/Pagination';
import ProductItem from '@components/ProductItem';

import {
  AllProductsListHeader,
  MobileAllProductsListHeader,
} from '@components/AllProductsListHeader';

import { useResponsiveApi } from 'Responsive';

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

function AllProductsListItem({ product, className }: ItemProps) {
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
  setOrder: any;
  order: 'recent' | 'favorite';
  handleProductsLoad: any;
  setPage: any;
  page: number;
}

function AllProductsList({
  products,
  className,
  setOrder,
  order,
  handleProductsLoad,
  setPage,
  page,
}: ListProps) {
  const { isMobile } = useResponsiveApi();
  const navigate = useNavigate();
  const handleAddProduct = () => {
    navigate('/additem');
  };

  return (
    <div className={className}>
      {isMobile ? (
        <MobileAllProductsListHeader
          onClick={handleAddProduct}
          order={order}
          setOrder={setOrder}
        />
      ) : (
        <AllProductsListHeader
          onClick={handleAddProduct}
          order={order}
          setOrder={setOrder}
        />
      )}

      <div className='row'>
        {products.map((product) => {
          return (
            <div key={product.id} className='products-col all-products-col'>
              <AllProductsListItem
                className='all-product-item'
                product={product}
              />
            </div>
          );
        })}
      </div>
      <div className='pagination-div'>
        <Pagination
          // handleProductsLoad={handleProductsLoad}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}

export default AllProductsList;
