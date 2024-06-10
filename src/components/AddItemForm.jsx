import { useState } from "react";
import "../styles/AddItemForm.css";
import FileInput from "./FileInput";
import TagInput from "./TagInput";

function AddItemForm() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: "",
  });

  const isDisabled =
    !formState.title || !formState.description || !formState.price;

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-item-container">
      <div className="add-item-wrapper">
        <label className="add-item-register">상품 등록하기</label>
        <button
          className="add-item-register-button"
          type="submit"
          disabled={isDisabled}
          style={{ backgroundColor: isDisabled ? "#9ca3af" : "#3692ff" }}
        >
          등록
        </button>
      </div>
      <FileInput />
      <div className="add-item-title-input-wrapper">
        <label className="add-item-title-input-label">상품명</label>
        <input
          className="add-item-title-input"
          placeholder="상품명을 입력해주세요"
          name="title"
          value={formState.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="add-item-description-textarea-wrapper">
        <label className="add-item-description-textarea-label">상품 소개</label>
        <textarea
          className="add-item-description-textarea"
          placeholder="상품 소개를 입력해주세요"
          name="description"
          value={formState.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="add-item-price-input-wrapper">
        <label className="add-item-price-input-label">판매 가격</label>
        <input
          className="add-item-price-input"
          placeholder="판매 가격을 입력해주세요"
          name="price"
          value={formState.price}
          onChange={handleInputChange}
        />
      </div>
      <TagInput />
    </div>
  );
}

export default AddItemForm;
