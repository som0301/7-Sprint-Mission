import { useEffect, useState } from "react";
import { getItems } from "../api.js";
import ItemBox from "./ItemBox";

function PrintBestItems() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const items = await getItems({ orderBy: "favorite" });
    setItems(items.list);
  };

  useEffect(() => {
    loadItems();
  }, []);
  return (
    <div className='container-items'>
      <h1>베스트 상품</h1>
      <div className='best-items>'>
        <ItemBox items={items} />
      </div>
    </div>
  );
}

export default PrintBestItems;
