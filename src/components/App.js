import { useEffect, useState } from "react";
import Header from "./Header";
import BestProductList from "./BestProductList";
import AllProductList from "./AllProductList";

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
