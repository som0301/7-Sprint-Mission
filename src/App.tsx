import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.tsx";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import Items from "./pages/Items/Items.tsx";
import AddItem from "./pages/Items/AddItem/AddItem.tsx";
import Community from "./pages/Community/Community.tsx";
import ProductDetail from "./pages/Items/ProductDetail/ProductDetail.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:id" element={<ProductDetail />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default App;
