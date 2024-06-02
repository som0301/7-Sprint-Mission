import AllProductList from "./AllItem/AllProductList";
import BestProductList from "./BestItem/BestProductList";
import "./ProductItem.css";

function Items(){
    return (
        <div className="body">
        <BestProductList />
        <AllProductList />
        </div>
    )
}

export default Items;