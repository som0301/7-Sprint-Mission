import { useState, useEffect } from 'react';
import BestProductsList from '../components/BestProductsList';
import { getProducts } from '../components/api/api';

import '/src/styles/Reset.css';
import '/src/App.css';
import AllProductsList from '/src/components/AllProductsList';
import '/src/styles/Button.css';

import { useResponsiveApi } from '../Responsive';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../components/common/CommonComponents';

function Items() {
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);

  const { isDesktop, isTablet } = useResponsiveApi();
  const allProductsPageSize = isDesktop ? 10 : isTablet ? 6 : 4;
  const bestProductsPageSize = isDesktop ? 4 : isTablet ? 2 : 1;

  const sortedProducts = allProducts.sort((a, b) => b[order] - a[order]);

  const handleBestProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setBestProducts(list);
  };

  const handleAllProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setAllProducts(list);
  };

  useEffect(() => {
    handleBestProductsLoad({
      orderBy: 'favorite',
      pageSize: `${bestProductsPageSize}`,
      page: 1,
    });
  }, [bestProductsPageSize]);

  useEffect(() => {
    handleAllProductsLoad({
      orderBy: `${order}`,
      pageSize: `${allProductsPageSize}`,
      page: `${page}`,
    });
  }, [order, page, allProductsPageSize]);

  return (
    <>
      <Helmet>
        <title>중고 마켓</title>
      </Helmet>
      <main>
        <BestProductsList
          className='best-products-list'
          products={bestProducts}
        />
        <AllProductsList
          handleProductsLoad={handleAllProductsLoad}
          page={page}
          setPage={setPage}
          order={order}
          setOrder={setOrder}
          className='all-products-list'
          products={sortedProducts}
        />
      </main>
    </>
  );
}

export default Items;
