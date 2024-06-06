import AddItemHeader from "../components/AddItemHeader";
import "../style/addItem.css";
import AddItemImage from "../components/AddItemImage";
import AddItemInput from "../components/\bAddItemInput";
import AddItemInputTag from "../components/AddItemInputTag";

function AddItemPage() {
  return (
    <div className="add-item-container">
      <form>
        <AddItemHeader />
        <AddItemImage />
        <AddItemInput />
        <AddItemInputTag />
      </form>
    </div>
  );
}

export default AddItemPage;
