import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import FreeBoard from "./pages/FreeBoard";
import UsedMarket from "./pages/UsedMarket";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="freeboard" element={<FreeBoard />} />
          <Route path="usedmarket" element={<UsedMarket />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
