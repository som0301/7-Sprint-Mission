import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/headers/header";
import App from "./App";
import AddItem from "./addItem/AddItem";

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