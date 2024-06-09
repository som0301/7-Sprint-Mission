import { useState } from "react";

function TagList() {
  const [tags, setTags] = useState("");
  const [tagList, setTagList] = useState([]);

  const handleTagChange = (e) => {
    setTags(e.target.value);
  };

  const addTag = (tag) => {
    if (!tagList.includes(tag) && tag !== "") {
      setTagList([...tagList, tag]);
      setTags("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.nativeEvent.isComposing === false) {
        e.preventDefault();
        addTag(tags.trim());
      }
    }
  };

  const handleTagDelete = (tagDelete) => {
    setTagList(tagList.filter((tag) => tag !== tagDelete));
  };

  return (
    <>
      <input
        name='tags'
        value={tags}
        onChange={handleTagChange}
        onKeyPress={handleKeyDown}
        placeholder='태그를 입력해주세요'
      />
      <div className='tag-list'>
        {tagList.map((tag, index) => (
          <span key={index} className='tag-item'>
            {tag}
            <button
              type='button'
              className='tag-delete-button'
              onClick={() => handleTagDelete(tag)}
            >
              X
            </button>
          </span>
        ))}
      </div>
    </>
  );
}

export default TagList;
