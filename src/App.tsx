import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage.tsx";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/items' element={<MarketPage />} />
        <Route path='/items/:productId' element={<ItemDetailPage />} />
        <Route path='/additem' element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;