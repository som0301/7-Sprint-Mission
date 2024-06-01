import React from "react";
import "./AddItemSection.css";
import { plusIcon, xIcon } from "../../assets/images";

export const AddItemSection = () => {
  return (
    <form className="add-item-section-container">
      <header className="add-item-section-header">
        <h2 className="add-item-section-title">상품 등록하기</h2>
        <button className="add-item-section-submit-button">등록</button>
      </header>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="image">상품이미지</label>
        <label
          htmlFor="image"
          className="add-item-section-input-add-image-button"
        >
          <img
            src={plusIcon}
            alt="판매상품 이미지등록을 할 수 있는 플러스모양의 아이콘"
          />
          <span>이미지등록</span>
        </label>
        <input type="file" id="image" name="image" />
      </div>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="name">상품명</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="info">상품소개</label>
        <textarea
          name="info"
          id="info"
          placeholder="상품 소개를 입력해주세요"
        />
      </div>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="price">판매가격</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="판매 가격을 입력해주세요"
        />
      </div>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="tag">태그</label>
        <input
          type="text"
          id="tag"
          name="tag"
          placeholder="태그를 입력해주세요"
        />
        <span className="add-item-section-tag">
          <span>티셔츠</span>
          <button>
            <img src={xIcon} alt="태그를 삭제할수있는 X모양 아이콘" />
          </button>
        </span>
      </div>
    </form>
  );
};
