import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import MarketPage from "./pages/MarketPage/MarketPage.jsx";
import AddItemPage from "./pages/AddItemPage/AddItemPage.jsx";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="withHeader">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="items">
            <Route index element={<MarketPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
          <Route path="additem" element={<AddItemPage />} />
          <Route path="community" element={<CommunityFeedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
