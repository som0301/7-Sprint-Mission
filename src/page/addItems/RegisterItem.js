import { useState } from "react";
import "../../component/Library.css";
import "./RegisterItem.css";
import FileInput from "./FileInput";
function RegisterItem() {
  const [imageValues, setImageValues] = useState({
    productImage: null,
  });

  const handleImageChange = (name, value) => {
    setImageValues((prevImageValue) => ({
      ...prevImageValue,
      [name]: value,
    }));
  };

  return (
    <div>
      <main>
        <form>
          <FileInput
            name="productImage"
            value={imageValues.productImage}
            onChange={handleImageChange}
            initialPreview=""
          />
        </form>
      </main>
    </div>
  );
}

export default RegisterItem;
