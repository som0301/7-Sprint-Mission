import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.js";
import AddItem from "./pages/AddItemPage.js";
import HomePage from "./pages/HomePage.js";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/items" element={<HomePage />}></Route>
          <Route path="/additem" element={<AddItem />}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
