import AllItem from "../components/AllItem";
import BestItem from "../components/BestItem";
import Header from "../components/Header";
import "../App.css";

function MainPage() {
  return (
    <>
      <Header />
      <main className="item-wrapper">
        <BestItem />
        <AllItem />
      </main>
    </>
  );
}

export default MainPage;
