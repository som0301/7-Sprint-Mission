import { useState, useEffect } from 'react';
import NavBar from './Nav-bar';
import BestProductSection from './Best-product-section';
import AllProductSection from './All-product-section';
import getItems from './api';
import './css/reset.css';
import './css/global.css';
import './css/App.css';

function App() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('recent');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productsError, setProductsError] = useState(null);

  const handleLoad = async () => {
    let result;
    try {
      setIsLoading(true);
      result = await getItems();
    } catch (error) {
      setProductsError(error);
    } finally {
      setIsLoading(false);
    }
    const { list } = result;
    setItems(list);
  };

  const handleOrderClick = (e) => {
    const nextOrder = e.target.name;
    setOrder(nextOrder);
  };

  useEffect(() => {
    handleLoad();
  }, [order]);

  return (
    <>
      <NavBar />
      <BestProductSection items={items} />
      {/* <AllProductSection /> */}
    </>
  );
}

export default App;
