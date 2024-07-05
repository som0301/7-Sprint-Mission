import React from "react";
import xIcon from "../../assets/images/icons/ic_x.svg";
import { ItemTagType } from "../../types/types";

function ItemTag({ value, onCancle }: ItemTagType) {
  function handleCencleClick() {
    onCancle(value);
  }

  return (
    <>
      <div className="tag-box">
        {value}
        <button className="cancel-button" onClick={handleCencleClick}>
          <img src={xIcon} alt="태그 삭제" />
        </button>
      </div>
    </>
  );
}

export default ItemTag;
