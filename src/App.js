import NavBar from "./components/NavBar";

import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import PrintBestItems from "./components/PrintBestItems.jsx";

function App() {
  return (
    <>
      <PrintBestItems />
    </>
  );
}

export default App;
