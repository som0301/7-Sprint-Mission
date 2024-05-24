import BestProductList from "./BestProductList";
import Header from "./Header";
import getBestProducts from "../BestProductsApi";
import { useEffect, useState } from "react";

function App() {
  const [order, setOrder] = useState("");
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const { products } = await getBestProducts();
    setItems(products);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Header />
      <BestProductList />
    </div>
  );
}

export default App;
