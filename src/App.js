import './App.css';
import "./style/Clear.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import HomePage from "./pages/HomePage";
import UsedMarket from "./pages/UsedMarket";
import AddItemPage from './pages/AddItemPage';

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
