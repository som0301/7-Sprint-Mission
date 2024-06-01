import React from "react";
import "./SecondHandMarketAddItem.css";
import Header from "../../components/Header/Header.jsx";
import { AddItemSection } from "../../components/AddItemSection/AddItemSection.jsx";

export const SecondHandMarketAddItem = () => {
  return (
    <div className="second-hand-market-add-item-container">
      <Header />
      <AddItemSection />
    </div>
  );
};
