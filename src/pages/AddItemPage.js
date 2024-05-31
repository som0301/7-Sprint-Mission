import { useState, useRef } from "react";
import "../styles/common.css";
import styles from "../styles/AddItemPage.module.css";
import FileInput from "../components/FileInput";

function sanitize(value) {
  if (typeof value === "string") {
    return value.trim(); // 문자열인 경우만 trim
  } else {
    return value;
  }
}

function AddItem() {
  const [values, setValues] = useState({
    imgFile: null,
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    itemTag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  // 3. 이벤트핸들러 함수 등록
  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, sanitize(value));
  };

  // 모든 입력 필드가 값이 채워져 있는지 확인하는 함수
  const isFormValid = () => {
    const { itemName, itemDescription, itemPrice, itemTag } = values;
    return (
      itemName.trim() !== "" &&
      itemDescription.trim() !== "" &&
      itemPrice.trim() !== "" &&
      itemTag.trim() !== ""
    );
  };

  return (
    // 1. form 안에 input 태그 추가
    <form>
      {/* 4. input 태그에서 value prop으로 각 State를 넘겨주고 onChange 이벤트 핸들러 등록 */}
      <div className={styles.addItemContainer}>
        <p className={styles.formTitle}>상품 등록하기</p>
        <button
          type="submit"
          className={`${styles.addItemBtn} ${
            isFormValid() ? styles.active : ""
          }`}
          disabled={!isFormValid()}
        >
          등록
        </button>
      </div>
      <div>
        <label htmlFor="itemImg" className={styles.inputLabel}>
          상품 이미지
        </label>
        <FileInput
          name="imgFile"
          value={values.imgFile}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="itemName" className={styles.inputLabel}>
          상품명
        </label>
        <input
          id="itemName"
          name="itemName"
          value={values.itemName}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div>
        <label htmlFor="itemDescription" className={styles.inputLabel}>
          상품 소개
        </label>
        <input
          id="itemDescription"
          className={styles.itemDescription}
          name="itemDescription"
          value={values.itemDescription}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
      </div>
      <div>
        <label htmlFor="itemPrice" className={styles.inputLabel}>
          판매가격
        </label>
        <input
          id="itemPrice"
          name="itemPrice"
          value={values.itemPrice}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />
      </div>
      <div>
        <label htmlFor="itemTag" className={styles.inputLabel}>
          태그
        </label>
        <input
          id="itemTag"
          name="itemTag"
          value={values.itemTag}
          onChange={handleInputChange}
          placeholder="태그를 입력해주세요"
        />
      </div>
    </form>
  );
}

export default AddItem;
