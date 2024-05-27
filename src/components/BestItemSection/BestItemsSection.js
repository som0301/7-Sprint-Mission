import React, { useState, useEffect } from "react";
import "./BestItemsSection.css";
import { getProducts } from "../../api";
import ItemCard from "../ItemCard/ItemCard";

const BestItemsSection = () => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [orderBy, setOrderBy] = useState("favorite");
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState({
    imageWidth: "221px",
    imageHeight: "221px",
  });
  const handleLoad = async ({ pageSize, orderBy }) => {
    const productsData = await getProducts({ page: 1, pageSize, orderBy });
    setItems(productsData.list);
  };

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  const changePageSize = (windowInnerWidth) => {
    if (windowInnerWidth >= 744 && windowInnerWidth < 1199) {
      setPageSize(2);
    } else if (windowInnerWidth < 744) {
      setPageSize(1);
    } else {
      setPageSize(4);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    changePageSize(windowInnerWidth);
  }, [windowInnerWidth]);

  useEffect(() => {
    handleLoad({ pageSize, orderBy });
  }, [pageSize, orderBy]);

  return (
    <section className="best-items-section-container">
      <h1 className="best-items-section-title">베스트상품</h1>
      <ul className="best-items-section-content">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} imageSize={imageSize} />
        ))}
      </ul>
    </section>
  );
};

export default BestItemsSection;
