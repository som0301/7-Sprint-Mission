import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import SellList from "./components/SellList.jsx";
import { getLists } from "./api.js";
import { useEffect, useState } from "react";

function App() {
  const [device, setDevice] = useState("");
  const [items, setItems] = useState([]);
  const [itemsBest, setItemsBest] = useState([]);

  const renderCountBest = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const renderCount = {
    mobile: 4,
    tablet: 6,
    desktop: 10,
  };

  useEffect(() => {
    handleResize();
    handleGetItemList();
  }, [device]);

  const handleGetItemList = async () => {
    const { list } = await getLists();

    const itemsOnPage = list.slice(0, renderCount[device]);

    const bestItemsOnPage = list
      .sort((a, b) => b.favoriteCount - a.favoriteCount)
      .slice(0, renderCountBest[device]);

    setItems(itemsOnPage);
    setItemsBest(bestItemsOnPage);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    const device = getDeviceType(width);
    setDevice(device);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Dropdown />
      <Header device={device}></Header>
      <SellList type="best" items={itemsBest}></SellList>
      <SellList items={items}></SellList>
    </div>
  );
}

function getDeviceType(width) {
  if (width >= 1200) return "desktop";
  if (width >= 768) return "tablet";

  return "mobile";
}

export default App;
