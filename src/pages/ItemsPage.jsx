import { useState, useEffect } from 'react';
import FavoriteProductSection from '../components/FavoriteProductSection';
import AllProductSection from '../components/AllProductSection';
import PaginationButtons from '../components/PaginationButtons';
import { getItems } from '../api';
import useMediaQuery from '../hooks/useMediaQuery';
import useAsync from '../hooks/useAsync';
import '../styles/reset.css';
import '../styles/global.css';
import '../styles/App.css';

const INITIAL_DEVICETYPE = 'Mobile';

function ItemsPage() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const [deviceType, isInitialized] = useMediaQuery();
  const [isLoading, loadingError, getItemsAsync] = useAsync(getItems);

  // const [search, setSearch] = useState('');
  // const [productsError, setProductsError] = useState(null);

  const getValidItems = async (options) => {
    const result = await getItemsAsync(options);
    if (!result) return;
    const { list } = result;
    return list;
  };

  const loadFavoriteItems = async (options) => {
    const nextItems = await getValidItems(options);
    setFavoriteItems((prevItems) => nextItems);
  };

  const loadAllItems = async (options) => {
    const nextItems = await getValidItems(options);
    setAllItems((prevItems) => nextItems);
  };

  const handleOrderClick = (nextOrder) => {
    setOrder(nextOrder);
  };

  const handlePaginationClick = (nextPage) => {
    setPage(nextPage);
  };

  useEffect(() => {
    if (!isInitialized) return;
    const isMobile = deviceType === 'Mobile';
    const isTablet = deviceType === 'Tablet';
    const responsivePageSize = isMobile ? 1 : isTablet ? 2 : 4;
    loadFavoriteItems({
      order: 'favorite',
      pageSize: responsivePageSize,
    });
  }, [deviceType, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    const isMobile = deviceType === 'Mobile';
    const isTablet = deviceType === 'Tablet';
    const responsivePageSize = isMobile ? 4 : isTablet ? 6 : 10;
    loadAllItems({ order, page, pageSize: responsivePageSize });
  }, [order, page, deviceType, isInitialized]);

  return (
    <>
      <FavoriteProductSection items={favoriteItems} />
      <AllProductSection
        items={allItems}
        onClick={handleOrderClick}
        isLoading={isLoading}
        order={order}
      />
      <PaginationButtons
        onClick={handlePaginationClick}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default ItemsPage;
