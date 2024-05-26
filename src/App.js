import "./App.css";
import NavBar from "./components/NavBar";
import { getItems } from "./api";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
    });
  }
  , []);


  return (
    <>
      <NavBar />
      
    </>
  );
}

export default App;
