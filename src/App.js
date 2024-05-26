import AddItem from "./pages/AddItem";
import UsedMarket from "./pages/UsedMarket";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/items" element={<UsedMarket />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
