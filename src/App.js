import './App.css';
import "./style/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/Component/Header";
import HomePage from "../src/pages/HomePage";
import UsedMarket from "../src/pages/UsedMarket";
import AddItemPage from '../src/pages/AddItemPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />;
        <Route path="items" element={<UsedMarket />} />;
        <Route path="additem" element={<AddItemPage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
