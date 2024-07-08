import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage/HomePage";
import FreeBoardPage from "./pages/FreeBoardPage";
import UsedMarketPage from "./pages/UsedMarketPage/UsedMarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import PrivacyPage from "./components/Layout/Footer/PrivacyPage";
import FaqPage from "./components/Layout/Footer/FaqPage";
import SingupAndLoginPage from "./pages/SingupAndLoginPage/SingupAndLoginPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="freeboard" element={<FreeBoardPage />} />
          <Route path="items">
            <Route index element={<UsedMarketPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
          <Route path="login" element={<SingupAndLoginPage />} />
          <Route path="signup" element={<SingupAndLoginPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
