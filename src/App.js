import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddItemPage from "./pages/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
