import Header from "./Layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>teststst</h1>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
