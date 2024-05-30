import React from "react";
import BestItems from "./components/BestItems";
import AllItems from "./components/AllItems";

function MarketPage() {
  return (
    <div className="wrapper">
      <BestItems />
      <AllItems />
    </div>
  );
}

export default MarketPage;
