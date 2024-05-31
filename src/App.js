import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import Header from "./components/Layout/Header";




function App() {
  return (
    // 5.29  BrowserRouter는 일반적으로 애플리케이션의 루트 컴포넌트를 감싸는 데 사용
    <BrowserRouter>
      <Header />

      <div className="withHeader">
        {/* 5.29 BrowserRouter는 애플리케이션의 라우터를 설정하고, 
        outes는 여러 Route를 그룹화하여 특정 경로에 대해 적절한 컴포넌트를 렌더링 됨 */}
        <Routes>
          <Route index element={<HomePage />} />
          {/* 5.29  사용자가 / 경로로 이동하면 Home 컴포넌트가 렌더링 됨 */}
          <Route path="login" element={<LoginPage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="community" element={<CommunityFeedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;