import React from "react";
import PrintBestItems from "./components/PrintBestItems";
import PrintAllItems from "./components/PrintAllItems";
import "./MarketPage.css";

const MarketPage: React.FC = () => {
  return (
    <div>
      <PrintBestItems />
      <PrintAllItems />
    </div>
  );
};

export default MarketPage;
