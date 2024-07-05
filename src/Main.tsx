import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage/HomePage";
import FreeBoardPage from "./pages/FreeBoardPage";
import UsedMarketPage from "./pages/UsedMarketPage/UsedMarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import PrivacyPage from "./pages/Footer/PrivacyPage";
import FaqPage from "./pages/Footer/FaqPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

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
          <Route path="login" element={<LoginPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
