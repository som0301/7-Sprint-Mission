import { useEffect, useState, useRef } from "react";
import FileInput from "../Component/FileInput";
import "../../src/style/AddItemPage.css";

interface AddItemState {
  imgFile: File | null;
  title: string;
  description: string;
  price: string;
  tag: string[];
}

function AddItemPage() {
  const [addItemValue, setAddItemValue] = useState<AddItemState>({
    imgFile: null,
    title: "",
    description: "",
    price: "",
    tag: [],
  });

  const handleChange = (name: string, value: string | File | null) => {
    setAddItemValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      handleTagChange(e.currentTarget.value.trim());
      e.currentTarget.value = "";
    }
  };

  const handleTagChange = (newTag: string) => {
    setAddItemValue((prevValues) => ({
      ...prevValues,
      tag: [...prevValues.tag, newTag],
    }));
    console.log(addItemValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    handleChange(name, value);
  };

  const deleteTag = (deleteTag: string) => {
    setAddItemValue((prevValues) => ({
      ...prevValues,
      tag: prevValues.tag.filter((tag) => tag !== deleteTag),
    }));
  };

  const submitButton = useRef<HTMLButtonElement>(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const test = () => {
    console.log("등록성공");
  };

  useEffect(() => {
    const buttonOnOff = () => {
      return !(
        addItemValue.title !== "" &&
        addItemValue.description !== "" &&
        addItemValue.price !== "" &&
        addItemValue.tag.length > 0
      );
    };
    if (submitButton.current) {
      if (buttonOnOff() === false) {
        submitButton.current.style.setProperty("background-color", "#3692FF");
      } else {
        submitButton.current.style.setProperty("background-color", "#9CA3AF");
      }
    }
    setButtonDisabled(buttonOnOff);
  }, [addItemValue]);

  return (
    <div className="addItemSize">
      <div className="addItemLayer">
        <div className="itemSubmitButton">
          <p>상품등록하기</p>
          <button disabled={buttonDisabled} onClick={test} ref={submitButton}>
            등록
          </button>
        </div>
        <div className="itemData">
          <p>상품이미지</p>
          <FileInput
            name="imgFile"
            value={addItemValue.imgFile}
            onChange={handleChange}
          />
        </div>
        <div className="itemData">
          <p>상품명</p>
          <input
            name="title"
            placeholder="상품명을 입력해주세요"
            value={addItemValue.title}
            className="itemTitle"
            onChange={handleInputChange}
          />
        </div>
        <div className="itemData">
          <p>상품소개</p>
          <input
            name="description"
            placeholder="상품 소개를 입력해주세요"
            value={addItemValue.description}
            className="itemDescription"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="itemData">
          <p>판매가격</p>
          <input
            name="price"
            placeholder="판매 가격을 입력해주세요"
            value={addItemValue.price}
            className="itemPrice"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="itemData">
          <p>태그</p>
          <input
            name="tag"
            placeholder="태그를 입력해주세요"
            className="itemTag"
            onKeyDown={(e) => enterEvent(e)}
          ></input>
          <div className="tagList">
            {addItemValue.tag.map((tag, index) => (
              <div className="tag">
                <p>{tag}</p>
                <button onClick={() => deleteTag(tag)}>X</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItemPage;
