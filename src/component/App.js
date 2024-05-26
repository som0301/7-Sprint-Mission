import Header from "./Header";
import { getProducts } from "../Api";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import BestProductListItem from "./BestProductList";
import BestProductsList from "./BestProductList";

function App() {
  const [order, setOrder] = useState("");
  const [items, setItems] = useState([]);
  const [bestProduct, setBestProduct] = useState([]);

  const bestProductSorted = bestProduct.sort(
    (a, b) => b["favborite"] - a["favorite"]
  );

  const handleBestProductLoad = async (options) => {
    const { list } = await getProducts(options);
    console.log("products", list);
    setBestProduct(list);
    console.log("items", list);
  };

  useEffect(() => {
    handleBestProductLoad({ orderBy: "favorite", page: 1, pageSize: 4 });
  }, []);

  return (
    <div>
      <Header />
      <BestProductsList products={bestProductSorted} />
    </div>
  );
}

export default App;
