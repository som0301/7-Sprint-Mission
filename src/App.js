import { Route, Routes } from "react-router-dom";
import Items from "./page/items/Items";
import AddItem from "./page/addItems/AddItem";

function App() {
  return (
    <Routes>
      <Route path="/items" element={<Items />} />
      <Route path="/additem" element={<AddItem />} />
    </Routes>
  );
}

export default App;
