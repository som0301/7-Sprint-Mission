import { useEffect, useState } from "react";
import "./MarketPage.css";
import SellList from "./components/SellList.jsx";
import { getLists } from "../../api.js";
import { getDeviceType } from "../../modules/js/utils.js";

function MarketPage() {
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
    <section>
      <SellList type="best" items={itemsBest} />
      <SellList items={items} />
    </section>
  );
}

export default MarketPage;
