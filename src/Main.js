import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import FreeBoardPage from "./pages/FreeBoardPage";
import UsedMarketPage from "./pages/UsedMarketPage";
import AdditemPage from "./pages/AdditemPage";
import Loginpage from "./pages/Loginpage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/freeboard" element={<FreeBoardPage />} />
          <Route path="/items" element={<UsedMarketPage />} />
          <Route path="/additems" element={<AdditemPage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
