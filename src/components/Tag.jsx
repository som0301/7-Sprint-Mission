import "../styles/Tag.css";
import { useState } from "react";
import styled from "styled-components";
import grayXIc from "../assets/icons/ic_x_gray.svg";

function Tag({ name, onDeleteClick }) {
  // const [name, setName] = useState("");
  const onClickHandle = () => {
    onDeleteClick(name);
  };
  return (
    <div className="tag">
      <span className="tag-name">{name}</span>
      <img
        src={grayXIc}
        alt="삭제 버튼"
        className="tag-btn-delete"
        onClick={onClickHandle}
      />
    </div>
  );
}

export default Tag;
