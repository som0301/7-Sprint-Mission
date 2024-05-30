import AddItem from "./pages/AddItem";
import UsedMarket from "./pages/UsedMarket";
import NotFound from "./pages/NotFound";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<UsedMarket />} /> */}
          <Route path="items" element={<UsedMarket />} />
          <Route path="additem" element={<AddItem />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
