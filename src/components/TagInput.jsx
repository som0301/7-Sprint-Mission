import { useState } from "react";
import "../styles/TagInput.css";
import CancelIcon from "../images/icons/ic_x.svg";

function TagInput() {
  const [tags, setTags] = useState([]);
  const [tagValue, setTagValue] = useState("");

  const addTags = () => {
    if (tagValue.trim() !== "") {
      setTags([...tags, tagValue]);
      setTagValue("");
    }
  };

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleTagChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleTagKeyUp = (e) => {
    if (e.key === "Enter") {
      addTags();
    }
  };

  return (
    <div className="add-item-tag-input-wrapper">
      <label className="add-item-tag-input-label">태그</label>
      <input
        className="add-item-tag-input"
        placeholder="태그를 입력해주세요"
        name="tag"
        value={tagValue}
        onChange={handleTagChange}
        onKeyUp={handleTagKeyUp}
      />
      <div className="add-item-tag-wrapper">
        {tags.map((tag, index) => (
          <div className="add-item-tag">
            <span className="add-item-tag-span">{tag}</span>
            <button
              className="add-item-tag-button"
              key={index}
              onClick={() => removeTags(index)}
            >
              <img src={CancelIcon} alt="태그 삭제" width="8" height="8" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
