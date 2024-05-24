import { useEffect, useState } from "react";
import { getItems } from "./Api";
import BestProductList from "./components/BestProducts";
import Header from "./components/Header";
import "./style/header.css";

function App() {
  // const [order, setOrder] = useState("favorite");
  const [items, setItems] = useState([]);
  // const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleLoad = async (options) => {
    const { list } = await getItems(options);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ orderBy: "favorite", page: 1, pageSize: 4 });
  }, []);

  return (
    <div className="header">
      {/* <header className="App-header" /> */}
      <Header />
      <div> 베스트 상품 </div>
      <div> 전체 상품 </div>
      <BestProductList items={items} />
    </div>
  );
}

export default App;
