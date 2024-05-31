import "../styles/AddItem.css";
import sampleImg from "../assets/images/img_sample.png";
import blueXIc from "../assets/icons/ic_x_blue.svg";
import grayXIc from "../assets/icons/ic_x_gray.svg";
import plusIc from "../assets/icons/ic_plus.svg";
import { useState } from "react";

function AddItem() {
  const [prodImg, setProdImg] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState([]);

  return (
    <div className="add-item">
      <form id="add-item-form" method="post">
        <div className="header">
          <p className="title">상품 등록하기</p>
          <button type="submit" className="btn-register btn-disabled">
            등록
          </button>
        </div>
        <div className="img">
          <label>상품 이미지</label>
          <div className="img-container">
            <div className="add-img">
              <img src={plusIc} alt="플러스_아이콘" />
              <p>이미지 등록</p>
            </div>
            <div className="added-img">
              <img src={sampleImg} alt="등록된_이미지" className="upload-img" />
              <img src={blueXIc} alt="삭제 버튼" className="btn-delete" />
            </div>
          </div>
        </div>
        <label htmlFor="title">상품명</label>
        <input
          id="title"
          name="title"
          value={title}
          placeholder="상품명을 입력해주세요"
          // onChange={}
        />
        <label htmlFor="discription">상품 소개</label>
        <textarea
          id="discription"
          name="discription"
          // value={discription}
          placeholder="상품 소개를 입력해주세요"
          // onChange={}
        />
        <label htmlFor="price">판매가격</label>
        <input
          id="price"
          name="price"
          value={price}
          placeholder="판매 가격을 입력해주세요"
          // onChange={}
        />
        <label htmlFor="tag">태그</label>
        <input
          id="tag"
          name="tag"
          value={tag}
          placeholder="태그를 입력해주세요"
          // onChange={}
        />
      </form>
    </div>
  );
}

export default AddItem;
