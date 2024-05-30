import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import FreeBoardPage from "./pages/FreeBoardPage";
import UsedMarketPage from "./pages/UsedMarketPage/UsedMarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import Loginpage from "./pages/Loginpage";
import NotFoundPage from "./pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="freeboard" element={<FreeBoardPage />} />
          <Route path="items" element={<UsedMarketPage />} />
          <Route path="additem" element={<AddItemPage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
