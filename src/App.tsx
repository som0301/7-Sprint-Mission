import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import SignupPage from "./pages/auth/SignupPage/SignupPage";

const App = () => {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/items' element={<MarketPage />} />
        <Route path='/items/:productId' element={<ItemDetailPage />} />
        <Route path='/additem' element={<AddItemPage />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
