import { useEffect, useState } from "react";
import AddItemHeader from "../AddItem/AddItemHeader";
import "./AddItemList.css";
import FileInputImage from "./fileInputImage";
import deleteTag from "../images/deleteTag.svg";

function formatNumber(number) {
  return new Intl.NumberFormat("ko-KR").format(number);
}

function AddItemList() {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    productName: "",
    productIntroduce: "",
    productPrice: "",
    productTag: [],
  });
  const [productTagInput, setProductTagInput] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "productPrice" && (isNaN(Number(value)) || value < 0)) {
      return;
    }
    let updatedValue = value;

    if (name === "productPrice") {
      updatedValue = formatNumber(value);
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleTagInputChange = (e) => {
    setProductTagInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = productTagInput.trim();

      if (newTag !== "") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          productTag: [...prevFormData.productTag, newTag],
        }));
        setProductTagInput("");
      }
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      productTag: prevFormData.productTag.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  useEffect(() => {
    const { productName, productIntroduce, productPrice, productTag } =
      formData;
    if (productName && productIntroduce && productPrice && productTag) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  return (
    <div className="all-wrapper">
      <AddItemHeader />
      {window.innerWidth >= 1200 && (
        <div className="wrapper">
          <div className="add-top">
            <h2 className="register">상품 등록하기</h2>
            <button
              className={`add-button ${isDisabled ? "disabled" : ""}`}
              type="submit"
              disabled={isDisabled}
              onClick={handleSubmit}
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
                value={formData.productName}
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
                value={formData.productIntroduce}
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
                value={formData.productPrice}
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
                value={productTagInput}
                className="add-product-input tag"
                id="product-tag"
                type="text"
                placeholder="태그를 입력해주세요"
                onChange={handleTagInputChange}
                onKeyDown={handleKeyDown}
              ></input>
              <div className="tag-container">
                {formData.productTag.map((tag, index) => (
                  <div key={index} className="tag-container-value">
                    {tag}
                    <button
                      className="delete-tag"
                      onClick={() => handleRemoveTag(index)}
                    >
                      <img src={deleteTag} alt="태그 삭제" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {window.innerWidth >=768 && window.innerWidth<=1199 &&(
        <div className="wrapper">
        <div className="add-top">
          <h2 className="register">상품 등록하기</h2>
          <button
            className={`add-button ${isDisabled ? "disabled" : ""}`}
            type="submit"
            disabled={isDisabled}
            onClick={handleSubmit}
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
              value={formData.productName}
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
              value={formData.productIntroduce}
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
              value={formData.productPrice}
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
              value={productTagInput}
              className="add-product-input tag"
              id="product-tag"
              type="text"
              placeholder="태그를 입력해주세요"
              onChange={handleTagInputChange}
              onKeyDown={handleKeyDown}
            ></input>
            <div className="tag-container">
              {formData.productTag.map((tag, index) => (
                <div key={index} className="tag-container-value">
                  {tag}
                  <button
                    className="delete-tag"
                    onClick={() => handleRemoveTag(index)}
                  >
                    <img src={deleteTag} alt="태그 삭제" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
      {window.innerWidth>=375 && window.innerWidth<=767 &&(
        <div className="wrapper">
        <div className="add-top">
          <h2 className="register">상품 등록하기</h2>
          <button
            className={`add-button ${isDisabled ? "disabled" : ""}`}
            type="submit"
            disabled={isDisabled}
            onClick={handleSubmit}
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
              value={formData.productName}
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
              value={formData.productIntroduce}
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
              value={formData.productPrice}
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
              value={productTagInput}
              className="add-product-input tag"
              id="product-tag"
              type="text"
              placeholder="태그를 입력해주세요"
              onChange={handleTagInputChange}
              onKeyDown={handleKeyDown}
            ></input>
            <div className="tag-container">
              {formData.productTag.map((tag, index) => (
                <div key={index} className="tag-container-value">
                  {tag}
                  <button
                    className="delete-tag"
                    onClick={() => handleRemoveTag(index)}
                  >
                    <img src={deleteTag} alt="태그 삭제" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default AddItemList;
