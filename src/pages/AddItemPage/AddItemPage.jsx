import "./AddItemPage.css";
import React, { useState, useEffect } from "react";

import ItemTag from "./ItemTag";
import { getFormatNumber } from "../../utils/Utils";
import FileInput from "./FileInput";

function validateAllInputs(inputsData) {
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
  // 모든 유효성이 true인지
  const [isAllValid, setIsAllValid] = useState(false);
  // 판매 가격
  const [price, setPrice] = useState("");
  // 파일 정보
  const [fileValue, setFileValue] = useState(null);

  // tag 배열 정보과 유효성 업데이트
  const updateTagAndValidity = (newTagArray) => {
    setTagValueArray(newTagArray);
    setFormData((prevData) => ({
      ...prevData,
      itemTag: { ...prevData.itemTag, isValid: newTagArray.length > 0 },
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const trimmedValue = value.trim();

    setFormData((prevData) => ({
      ...prevData,
      [id]: { value, isValid: trimmedValue !== "" },
    }));
  };

  const handleTagChange = (e) => {
    if (e.key === "Enter") {
      // 앞 뒤 빈칸 제거
      const newValue = e.target.value.trim();
      // 새로운 값이 비어있지 않은 경우에만 처리
      if (newValue) {
        // 빈 칸을 기준으로 분할하여 각각의 값을 태그로 추가
        // 새로운 태그들이 태그 배열에 포함되어 있지 않은 경우만
        const newTags = newValue
          .split(" ")
          .filter((tag) => !tagValueArray.includes(tag));
        if (newTags.length > 0) {
          const newTagArray = [...tagValueArray, ...newTags];
          updateTagAndValidity(newTagArray);
        }
      }
      // 작업 완료 후 빈칸으로 초기화
      e.target.value = "";
    }
  };

  const handleTagCancel = (tagValue) => {
    const newTagArray = tagValueArray.filter((value) => value !== tagValue);
    updateTagAndValidity(newTagArray);
  };

  const handlePriceChange = (e) => {
    const inputPrice = e.target.value;

    // 판매 가격 숫자만 입력 및 세자릿수마다 콤마 추가
    const formattedPrice = getFormatNumber(inputPrice);

    setPrice(formattedPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (value) => {
    console.log(value);
    setFileValue((prevValues) => value);
  };

  useEffect(() => {
    const allValid = validateAllInputs(formData);
    setIsAllValid(allValid);
  }, [tagValueArray, formData]);

  return (
    <section className="add-item-page">
      <form onSubmit={handleSubmit}>
        <div className="add-item-bar">
          <h1>상품 등록하기</h1>
          <button className="button" disabled={!isAllValid}>
            등록
          </button>
        </div>
        <h2 id="item-img-h2">상품 이미지</h2>
        <FileInput
          name="imgFile"
          value={fileValue}
          onChange={handleFileChange}
        />
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
          value={price}
          placeholder="판매가격을 입력해주세요"
          onChange={handlePriceChange}
          onBlur={handleChange}
        ></input>
        <h2>태그</h2>
        <input
          id="itemTag"
          placeholder="태그를 입력해주세요"
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
