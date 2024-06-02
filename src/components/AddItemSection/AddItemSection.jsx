import React, { useEffect, useRef, useState } from "react";
import "./AddItemSection.css";
import { plusIcon, xIcon, xIconBlue } from "../../assets/images";

const Tag = ({ tagText, onDelete }) => {
  return (
    <span className="add-item-section-tag">
      <span>{tagText}</span>
      <button onClick={() => onDelete(tagText)}>
        <img src={xIcon} alt="태그를 삭제할수있는 X모양 아이콘" />
      </button>
    </span>
  );
};

export const AddItemSection = () => {
  const [productImageFile, setProductImageFile] = useState("");
  const [productName, setProductName] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productTag, setProductTag] = useState("");
  const [productTags, setProductTags] = useState([]);
  const [filePreview, setFilePreview] = useState();
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChangeInputValue = (e, setter) => {
    setter(e.target.value);
  };
  const handleChangeInputFile = (e) => {
    setProductImageFile(e.target.files[0]);
  };
  const handleDeletePreview = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    setProductImageFile(null);
  };
  const handleAddTag = () => {
    if (!productTag) return;
    setProductTags([...productTags, productTag]);
    setProductTag("");
  };
  const handleKeyDownAddTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };
  const handleDeleteTag = (tagText) => {
    setProductTags(productTags.filter((tag) => tag !== tagText));
  };
  const checkFieldEmpty = () => {
    if (productName && productInfo && productPrice && productTags.length > 0) {
      setIsFieldEmpty(true);
    } else {
      setIsFieldEmpty(false);
    }
  };
  const inputRef = useRef();

  useEffect(() => {
    checkFieldEmpty();
  }, [productName, productInfo, productPrice, productTag]);

  useEffect(() => {
    if (!productImageFile) return;
    setFilePreview(URL.createObjectURL(productImageFile));

    return () => {
      setProductImageFile();
      URL.revokeObjectURL(URL.createObjectURL(productImageFile));
    };
  }, [productImageFile]);

  return (
    <form className="add-item-section-container" onSubmit={handleSubmit}>
      <header className="add-item-section-header">
        <h2 className="add-item-section-title">상품 등록하기</h2>
        <button
          disabled={isFieldEmpty}
          className={`add-item-section-submit-button ${
            isFieldEmpty ? "abled" : null
          }`}
        >
          등록
        </button>
      </header>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="image">상품이미지</label>
        <div className="add-item-section-file-input-box">
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
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            ref={inputRef}
            onChange={handleChangeInputFile}
          />
          {filePreview && (
            <div className="add-item-section-preview-image-wrapper">
              <img
                className="add-item-section-preview-image"
                src={filePreview}
                alt="등록한 판매상품 이미지 미리보기"
              />
              <button
                className="add-item-section-preview-image-delete-button"
                onClick={handleDeletePreview}
              >
                <img
                  src={xIconBlue}
                  alt="판매상품 미리보기 이미지를 삭제할수있는 X모양 아이콘"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="name">상품명</label>
        <input
          type="text"
          id="name"
          name="name"
          value={productName}
          onChange={(e) => {
            handleChangeInputValue(e, setProductName);
          }}
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="info">상품소개</label>
        <textarea
          name="info"
          id="info"
          value={productInfo}
          onChange={(e) => {
            handleChangeInputValue(e, setProductInfo);
          }}
          placeholder="상품 소개를 입력해주세요"
        />
      </div>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="price">판매가격</label>
        <input
          type="text"
          id="price"
          name="price"
          value={productPrice}
          onChange={(e) => {
            handleChangeInputValue(e, setProductPrice);
          }}
          placeholder="판매 가격을 입력해주세요"
        />
      </div>
      <div className="add-item-section-input-wrapper">
        <label htmlFor="tag">태그</label>
        <input
          type="text"
          id="tag"
          name="tag"
          value={productTag}
          onChange={(e) => {
            handleChangeInputValue(e, setProductTag);
          }}
          onBlur={handleAddTag}
          onKeyDown={handleKeyDownAddTag}
          placeholder="태그를 입력해주세요"
        />
        <div className="add-item-section-tags">
          {productTags.map((tag, index) => (
            <Tag key={index} tagText={tag} onDelete={handleDeleteTag} />
          ))}
        </div>
      </div>
    </form>
  );
};
