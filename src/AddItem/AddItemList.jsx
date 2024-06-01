import { useEffect, useState } from "react";
import AddItemHeader from "../AddItem/AddItemHeader";
import "./AddItemList.css";
import FileInputImage from "./fileInputImage";

function formatNumber(number) {
  return new Intl.NumberFormat("ko-KR").format(number);
}

function AddItemList() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [formaData, setFormData] = useState({
    productName: "",
    productIntroduce: "",
    productPrice: "",
    productTag: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "productPrice" && (isNaN(Number(value)) || value < 0)) {
      return;
    }
    let updatedValue=value;

    if(name==="productPrice"){
     updatedValue=formatNumber(value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  useEffect(() => {
    const { productName, productIntroduce, productPrice, productTag } =
      formaData;
    if (productName && productIntroduce && productPrice && productTag) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formaData]);

  return (
    <div>
      <AddItemHeader />

      <div className="add-top">
        <h2 className="register">상품 등록하기</h2>
        <button
          className={`add-button ${isDisabled ? "disabled" : ""}`}
          type="submit"
          disabled={isDisabled}
        >
          등록
        </button>
      </div>

      <div className="add-total">
        <FileInputImage />

        <div className="add-product">
          <label className="add-label" htmlFor="product-name">
            상품명
          </label>
          <input
            name="productName"
            value={formaData.productName}
            className="add-product-input name"
            id="product-name"
            type="text"
            placeholder="상품명을 입력해주세요"
            onChange={handleInput}
          ></input>
        </div>

        <div className="add-product">
          <label className="add-label" htmlFor="product-introduce">
            상품 소개
          </label>
          <textarea
            name="productIntroduce"
            value={formaData.productIntroduce}
            className="add-product-input introduce"
            id="product-introduce"
            type="text"
            placeholder="상품 소개를 입력해주세요"
            onChange={handleInput}
          ></textarea>
        </div>

        <div className="add-product">
          <label className="add-label" htmlFor="product-price">
            판매 가격
          </label>
          <input
            name="productPrice"
            value={formaData.productPrice}
            className="add-product-input price"
            id="product-price"
            type="text"
            placeholder="판매 가격을 입력해주세요"
            onChange={handleInput}
          ></input>
        </div>

        <div className="add-product">
          <label className="add-label" htmlFor="product-tag">
            태그
          </label>
          <input
            name="productTag"
            value={formaData.productTag}
            className="add-product-input tag"
            id="product-tag"
            type="text"
            placeholder="태그를 입력해주세요"
            onChange={handleInput}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default AddItemList;
