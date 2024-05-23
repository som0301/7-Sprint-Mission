import { useState } from "react";
import Header from "/src/components/header/Header";
import { getProducts } from "./components/api/api";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProducts();
    setProducts(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header id="header" />
    </div>
  );
}

export default App;
