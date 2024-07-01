import AllProductList from "./AllItem/AllProductList";
import BestProductList from "./BestItem/BestProductList";
import "./ProductItem.css";
import Header from "./headers/Header";

function Items() {
  return (
    <div>
      <Header />
      <BestProductList />
      <AllProductList />
    </div>
  );
}

export default Items;
