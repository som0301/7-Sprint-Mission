import { Route, Routes } from "react-router-dom";
import Header from "./headers/Header";
import AddItem from "./AddItem/AddItem";
import ProductDetail from "./ProductDetail/ProductDetail";
import Home from "./Home";
import Items from "./Items";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/items/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
