import { useEffect, useState } from "react";
import getItems from "../api/api";
import BestProductItem from "./BestProductItem";
import "./ProductPage.css";

const ITEM_INIT = 4;

function BestProductList() {
  const [items, setItems] = useState([]);

  const fetchData = async (options) => {
    let result;
    try {
      result = await getItems({ orderBy: "favorite", pageSize: ITEM_INIT });
    } catch (error) {
      console.log(error);
      return;
    } finally {
    }

    const { list } = result;
    setItems(list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="best-products">
      <h1>베스트 상품</h1>
      <ul className="list-area">
        <BestProductItem items={items} />
      </ul>
    </section>
  );
}

export default BestProductList;
