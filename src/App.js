import { useState, useEffect } from 'react';
import NavBar from './Nav-bar';
import FavoriteProductSection from './Favorite-product-section';
import AllProductSection from './All-product-section';
import getItems from './api';
import './css/reset.css';
import './css/global.css';
import './css/App.css';

function App() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productsError, setProductsError] = useState(null);

  // const isMobile = 375 <= Window.innerWidth < 768;
  // const isTabelet = 768 <= Window.innerWidth < 1200;
  // const isPC = 1200 <= Window.innerWidth;

  const getValidItems = async (options) => {
    let result;
    try {
      setIsLoading(true);
      result = await getItems(options);
    } catch (error) {
      setProductsError(error);
    } finally {
      setIsLoading(false);
    }
    const { list } = result;
    return list;
  };

  const handleOrderClick = (e) => {
    const nextOrder = e.target.name;
    setOrder(nextOrder);
  };

  const loadFavoriteItems = async (options) => {
    const list = await getValidItems(options);
    setFavoriteItems(list);
  };

  const loadAllItems = async (options) => {
    const list = await getValidItems(options);
    setAllItems(list);
  };

  useEffect(() => {
    loadFavoriteItems({ order: 'favorite', page: 1, pageSize: 1 });
  }, []);

  useEffect(() => {
    loadAllItems({ order, page, pageSize, search });
  }, [order]);

  return (
    <>
      <NavBar />
      <FavoriteProductSection items={favoriteItems} />
      {/* <AllProductSection /> */}
    </>
  );
}

export default App;
