import React from "react";
import "./SecondHandMarket.css";
import Header from "../../components/Header/Header.js";
import BestItemsSection from "../../components/BestItemSection/BestItemsSection.js";
import AllItemsSection from "../../components/AllItemsSection/AllItemsSection.js";

const SecondHandMarket = () => {
  return (
    <div className="second-hand-market-container">
      <Header />
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
};

export default SecondHandMarket;
