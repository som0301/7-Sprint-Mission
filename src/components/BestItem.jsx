import BestItemList from "./BestItemList";
import "../styles/BestItem.css";

function BestItem() {
  return (
    <div className="best-item-container">
      <label className="best-item-label">베스트 상품</label>
      <BestItemList />
    </div>
  );
}

export default BestItem;
