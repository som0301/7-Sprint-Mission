import { useEffect, useState } from "react";
import "../../component/Library.css";
import "./RegisterItem.css";
import FileInput from "./FileInput";
function RegisterItem() {
  const [imageValues, setImageValues] = useState({
    productImage: null,
  });

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productTag, setProductTag] = useState("");

  const handleImageChange = (name, value) => {
    setImageValues((prevImageValue) => ({
      ...prevImageValue,
      [name]: value,
    }));
  };

  useEffect(() => {
    let submitButtonStatus = document.querySelector(".small-button.submit");
    if (
      productName.length !== 0 &&
      productDescription.length !== 0 &&
      productPrice.length !== 0 &&
      productTag.length !== 0
    ) {
      submitButtonStatus.disabled = false;
    } else {
      submitButtonStatus.disabled = true;
    }
  }, [productName, productDescription, productPrice, productTag]);

  return (
    <div>
      <main>
        <form>
          <div className="register-title">
            <h2>상품 등록하기</h2>
            <button className="small-button submit" disabled={true}>
              등록
            </button>
          </div>
          <FileInput
            name="productImage"
            value={imageValues.productImage}
            onChange={handleImageChange}
            initialPreview=""
          />
          <div className="input-text">
            <div className="box name">
              <label className="label name" htmlFor="product-name">
                상품명
              </label>
              <input
                id="product-name"
                className="input name"
                placeholder="상품명을 입력해 주세요."
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="box description">
              <label
                className="label description"
                htmlFor="product-description"
              >
                상품 소개
              </label>
              <input
                id="product-description"
                placeholder="상품 소개를 입력해 주세요"
                className="input description"
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            <div className="box price">
              <label className="label price" htmlFor="product-price">
                상품 가격
              </label>
              <input
                id="product-price"
                placeholder="판매 가격을 입력해 주세요."
                className="input price"
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div className="box tag">
              <label className="label tag" htmlFor="product-tag">
                태그
              </label>
              <input
                id="product-tag"
                className="input tag"
                placeholder="태그를 입력해 주세요."
                onChange={(e) => setProductTag(e.target.value)}
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default RegisterItem;
