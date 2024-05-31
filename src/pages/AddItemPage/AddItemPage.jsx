import "./AddItemPage.css";
import React, { useState, useEffect, useRef } from "react";
import logoImg from "../../assets/images/icons/ic_plus.svg";
import ItemTag from "./ItemTag";

export function validateAllInputs(inputsData) {
  const allValid = Object.values(inputsData).every((input) => input.isValid);
  return allValid;
}

function AddItemPage() {
  // form 데이터 객체
  const [formData, setFormData] = useState({
    itemTitle: { value: "", isValid: false },
    itemIntro: { value: "", isValid: false },
    itemCost: { value: "", isValid: false },
    itemTag: { value: "", isValid: false },
  });

  // tag 버튼을 그리기 위한 정보 담을 배열
  const [tagValueArray, setTagValueArray] = useState([]);
  const isAllValidRef = useRef(false);

  function handleChange(e) {
    const { id, value } = e.target;
    const trimmedValue = value.trim();
    setFormData((prevData) => ({
      ...prevData,
      [id]: {
        value,
        isValid: id === "itemTag" ? prevData[id].isValid : trimmedValue !== "",
      },
    }));
  }

  function handleTagChange(e) {
    if (e.key === "Enter") {
      const newValue = e.target.value.trim();
      if (newValue && !tagValueArray.includes(newValue)) {
        const newTagArray = [...tagValueArray, newValue];
        setTagValueArray(newTagArray);
        setFormData((prevData) => ({
          ...prevData,
          itemTag: { ...prevData.itemTag, isValid: newTagArray.length > 0 },
        }));
      }

      e.target.value = "";
    }
  }

  function handleTagCancel(tagValue) {
    const newTagArray = tagValueArray.filter((value) => value !== tagValue);
    setTagValueArray(newTagArray);
    setFormData((prevData) => ({
      ...prevData,
      itemTag: { ...prevData.itemTag, isValid: newTagArray.length > 0 },
    }));
  }

  useEffect(() => {
    isAllValidRef.current = validateAllInputs(formData);
  }, [tagValueArray, formData]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="add-item-page">
      <form onSubmit={handleSubmit}>
        <div className="add-item-bar">
          <h1>상품 등록하기</h1>
          <button>등록</button>
        </div>
        <h2>상품 이미지</h2>
        <div className="add-image-wrapper">
          <img id="add-img" src={logoImg} alt="추가하기" />
          <span>이미지 등록</span>
        </div>

        <h2>상품명</h2>
        <input
          id="itemTitle"
          className=""
          placeholder="상품명을 입력해주세요"
          onBlur={handleChange}
        ></input>
        <h2>상품 소개</h2>
        <textarea
          id="itemIntro"
          placeholder="상품소개를 입력해주세요"
          onBlur={handleChange}
        ></textarea>
        <h2>판매가격</h2>
        <input
          id="itemCost"
          placeholder="판매가격을 입력해주세요"
          onBlur={handleChange}
        ></input>
        <h2>태그</h2>
        <input
          id="itemTag"
          placeholder="태그를 입력해주세요"
          onChange={handleChange}
          onKeyDown={handleTagChange}
        ></input>
        <div className="tag-wrapper">
          {tagValueArray.map((value, index) => (
            <ItemTag key={index} value={value} onCencle={handleTagCancel} />
          ))}
        </div>
      </form>
    </section>
  );
}

export default AddItemPage;
