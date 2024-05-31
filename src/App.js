import './App.css';
import "./style/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/component/header";
import HomePage from "../src/pages/homePage";
import UsedMarket from "../src/pages/usedMarket";
import AddItemPage from '../src/pages/addItemPage';

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
