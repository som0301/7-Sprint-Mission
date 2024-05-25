import { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import BestProductList from "./components/BestProductList";
import AllProductList from "./components/AllProductList";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BestProductList />
        <AllProductList />
      </main>
    </div>
  );
}

export default App;
