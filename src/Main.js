import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/headers/header";
import App from "./App";

function Main() {
    return (
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/items" element={<App />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Main;