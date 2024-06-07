import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./headers/Header";
import App from "./App";
import AddItem from "./AddItem/AddItem";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/items" element={<App />} />
        <Route path="/addItem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
