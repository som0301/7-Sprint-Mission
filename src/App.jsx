import React from "react";
import "./assets/styles/reset.css";
import "./assets/styles/common.css";
import SecondHandMarket from "./pages/SecondHandMarket/SecondHandMarket";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SecondHandMarketAddItem } from "./pages/SecondHandMarketAddItem/SecondHandMarketAddItem";
import SecondHandMarketProductDetail from "./pages/SecondHandMarketProductDetail/SecondHandMarketProductDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />} />
        <Route path="/items">
          <Route index element={<SecondHandMarket />} />
          <Route
            path=":productId"
            element={<SecondHandMarketProductDetail />}
          />
        </Route>
        <Route path="/additem" element={<SecondHandMarketAddItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
