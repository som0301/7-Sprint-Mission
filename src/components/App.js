import { useEffect, useState } from "react";
import Header from "./Layout/Header";

function App({ children }) {
  return (
    <div>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default App;
