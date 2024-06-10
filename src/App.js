import Header from "./components/Header";
import ProductsList from "./pages/ProductsListPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import AddItemPage from "./pages/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="items" element={<ProductsList />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="additem" element={<AddItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
