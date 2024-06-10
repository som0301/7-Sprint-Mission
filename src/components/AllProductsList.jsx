import { useNavigate } from 'react-router-dom';
import Pagination from '/src/components/Pagination';
import ProductItem from '/src/components/ProductItem';

import {
  AllProductsListHeader,
  MobileAllProductsListHeader,
} from '/src/components/AllProductsListHeader';

import { useResponsiveApi } from '/src/Responsive';

function AllProductsListItem({ product, className }) {
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

function AllProductsList({
  products,
  className,
  setOrder,
  order,
  handleProductsLoad,
  setPage,
  page,
}) {
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
          handleProductsLoad={handleProductsLoad}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}

export default AllProductsList;