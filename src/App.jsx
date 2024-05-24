import { useState, useEffect } from "react";
import Header from "/src/components/header/Header";
import BestProductsList from "./components/BestProductsList";
import { getProducts } from "./components/api/api";

import "/src/styles/Reset.css";
import "./App.css";

function App() {
  //const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  //const [order, setOrder] = useState("createdAt");

  const sortedBestProducts = bestProducts.sort(
    (a, b) => b["favorite"] - a["favorite"]
  );

  const handleBestProductsLoad = async (options) => {
    const { list } = await getProducts(options);
    setBestProducts(list);
  };

  useEffect(() => {
    handleBestProductsLoad({
      orderBy: "favorite",
      pageSize: 4,
      page: 1,
    });
  }, []);

  // useEffect(() => {
  //   handleLoad();
  // }, []);

  return (
    <>
      <Header id="header" />
      <main id="main">
        <BestProductsList products={sortedBestProducts} />
      </main>
    </>
  );
}

export default App;
