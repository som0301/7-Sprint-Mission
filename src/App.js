import { useEffect, useState } from "react";
import { getItems } from "./Api";
import BestProductList from "./components/BestProducts";

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
    <div>
      {/* <header className="App-header" /> */}
      <div>로고 이미지</div>
      <div> 베스트 상품 </div>
      <div> 전체 상품 </div>
      <BestProductList items={items} />
    </div>
  );
}

export default App;
