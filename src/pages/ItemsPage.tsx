import { useState, useEffect } from 'react';
import BestProductsList from '@components/BestProductsList';
import { getProducts } from '@data/api';

import '@assets/styles/Reset.css';
import '/src/App.css';
import AllProductsList from '@components/AllProductsList';
import '@assets/styles/Button.css';

import { useResponsiveApi } from '@hooks/Responsive';
import { Helmet } from 'react-helmet';

interface Options {
  orderBy: string;
  pageSize: string;
  page: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  tags: string[];
  images: string;
  ownerId: number;
  favoriteCount: string;
  createdAt: Date;
  updatedAt: Date;
}

type Order = 'recent' | 'favorite';

const parseProductDates = (products: any[]): Product[] => {
  return products.map((product) => ({
    ...product,
    createdAt: new Date(product.createdAt),
    updatedAt: new Date(product.updatedAt),
  }));
};

const compareProducts = (a: Product, b: Product, orderBy: Order) => {
  if (orderBy === 'recent') {
    return b.createdAt.getTime() - a.createdAt.getTime();
  } else if (orderBy === 'favorite') {
    return Number(b.favoriteCount) - Number(a.favoriteCount);
  }
  // 다른 정렬 기준에 대한 비교 로직 추가
  return 0;
};

function Items() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [bestProducts, setBestProducts] = useState<Product[]>([]);
  const [order, setOrder] = useState<Order>('recent');
  const [page, setPage] = useState<number>(1);

  const { isDesktop, isTablet } = useResponsiveApi();
  const allProductsPageSize = isDesktop ? 10 : isTablet ? 6 : 4;
  const bestProductsPageSize = isDesktop ? 4 : isTablet ? 2 : 1;

  const sortedProducts = allProducts.sort((a, b) =>
    compareProducts(a, b, order)
  );

  const handleBestProductsLoad = async (options: Options) => {
    const { list } = await getProducts(options);
    setBestProducts(parseProductDates(list));
  };

  const handleAllProductsLoad = async (options: Options) => {
    const { list } = await getProducts(options);
    setAllProducts(parseProductDates(list));
  };

  useEffect(() => {
    handleBestProductsLoad({
      orderBy: 'favorite',
      pageSize: `${bestProductsPageSize}`,
      page: '1',
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
