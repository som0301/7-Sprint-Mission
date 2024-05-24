import { useState, useEffect } from "react";
import Header from "/src/components/header/Header";
import BestProductsList from "./components/BestProductsList";
import { getProducts } from "./components/api/api";

import "/src/styles/Reset.css";
import "./App.css";
import AllProductsList from "./components/AllProductsList";
import "/src/styles/Button.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("recent");

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
      orderBy: "favorite",
      pageSize: 4,
      page: 1,
    });
  }, []);

  useEffect(() => {
    handleAllProductsLoad({
      orderBy: `${order}`,
      pageSize: 10,
      page: 1,
    });
  }, [order]);

  return (
    <>
      <Header id="header" />
      <main id="main">
        <BestProductsList
          className="best-products-list"
          products={bestProducts}
        />
        <AllProductsList
          order={order}
          setOrder={setOrder}
          className="all-products-list"
          products={sortedProducts}
        />
      </main>
    </>
  );
}

export default App;
