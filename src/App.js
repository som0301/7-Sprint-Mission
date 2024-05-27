import NavBar from "./components/NavBar";

import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import PrintBestItems from "./components/PrintBestItems.jsx";
import PrintAllItems from "./components/PrintAllItems.jsx";

function App() {
  return (
    <>
      <PrintBestItems />
      <PrintAllItems />
    </>
  );
}

export default App;
