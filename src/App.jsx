import { Outlet } from "react-router-dom";
import TopNavigation from "./components/TopNavigation";

function App() {
  return (
    <>
      <TopNavigation />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
