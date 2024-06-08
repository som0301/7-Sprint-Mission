import { useEffect, useState } from "react";
import "./MarketPage.css";
import SellList from "./components/SellList.jsx";
import { getLists } from "../../api.js";
import { getDeviceType, debounce } from "../../modules/js/utils.js";

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

function MarketPage() {
  const [deviceType, setdeviceType] = useState("");
  const [items, setItems] = useState([]);
  const [itemsBest, setItemsBest] = useState([]);

  useEffect(() => {
    handleResize();
    handleGetItemList();
  }, [deviceType]);

  const handleGetItemList = async () => {
    const { list } = await getLists();

    const itemsOnPage = list.slice(0, renderCount[deviceType]);

    const bestItemsOnPage = list
      .sort((a, b) => b.favoriteCount - a.favoriteCount)
      .slice(0, renderCountBest[deviceType]);

    setItems(itemsOnPage);
    setItemsBest(bestItemsOnPage);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    const deviceType = getDeviceType(width);
    setdeviceType(deviceType);
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
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
