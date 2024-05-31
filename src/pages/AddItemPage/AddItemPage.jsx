import "./AddItemPage.css";
import InputForm from "../../components/InputForm.jsx";
import InputImage from "../../components/InputImage.jsx";
import Button from "../../components/Button.jsx";
import { useState, useEffect } from "react";

function AddItemPage() {
  const [buttonDisable, setButtonDisable] = useState("");

  const [isInputFilled, setIsInputFilled] = useState({
    image: false,
    name: false,
    introduce: false,
    price: false,
    tag: false,
  });

  useEffect(() => {
    const isEveryInputFilled = !Object.values(isInputFilled).some(
      (value) => !value
    );

    const buttonActivateControl = isEveryInputFilled ? "" : "disable";
    setButtonDisable(buttonActivateControl);
  }, [isInputFilled]);

  const handleInputChange = (id, value) => {
    const isValue = !!value;
    setIsInputFilled((prevState) => ({
      ...prevState,
      [id]: isValue,
    }));
  };

  return (
    <section className="AddItemPage">
      <div className="AddItemPage-header">
        <h2>상품 등록하기</h2>
        <Button className={`button small ${buttonDisable}`}>등록</Button>
      </div>
      <InputImage id="image" name="상품 이미지" onChange={handleInputChange} />
      <InputForm id="name" name="상품명" onChange={handleInputChange} />
      <InputForm id="introduce" name="상품 소개" onChange={handleInputChange} />
      <InputForm
        id="price"
        name="판매가격"
        type="number"
        onChange={handleInputChange}
      />
      <InputForm id="tag" name="태그" onChange={handleInputChange} />
    </section>
  );
}

export default AddItemPage;
