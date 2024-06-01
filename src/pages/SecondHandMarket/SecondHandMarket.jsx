import React from "react";
import "./SecondHandMarket.css";
import Header from "../../components/Header/Header.jsx";
import BestItemsSection from "../../components/BestItemSection/BestItemsSection.jsx";
import AllItemsSection from "../../components/AllItemsSection/AllItemsSection.jsx";

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
