import { Fragment, useState } from "react";
import "../style/addItem.css";
import cancelIcon from "../assets/ic_x.svg";

function AddItemInputTag() {
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const addTag = () => {
    const trimmedValue = value.trim();
    if (trimmedValue !== "" && !tags.includes(trimmedValue)) {
      setTags([...tags, trimmedValue]);
      setValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={onChange}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <div>
        {tags.map((tag, index) => (
          <Fragment key={index}>
            <span>{tag}</span>
            <button onClick={() => removeTag(tag)}>
              <img src={cancelIcon} alt="삭제버튼" />
            </button>
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default AddItemInputTag;
