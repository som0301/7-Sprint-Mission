import { Outlet } from "react-router-dom";
import TopNavigation from "./TopNavigation";

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
