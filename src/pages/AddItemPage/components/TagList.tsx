import React, { ChangeEvent, KeyboardEvent, useState } from "react";

const TagList: React.FC = () => {
  const [tags, setTags] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);

  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  const addTag = (tag: string) => {
    if (!tagList.includes(tag) && tag !== "") {
      setTagList([...tagList, tag]);
      setTags("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.nativeEvent.isComposing === false) {
        e.preventDefault();
        addTag(tags.trim());
      }
    }
  };

  const handleTagDelete = (tagDelete: string) => {
    setTagList(tagList.filter((tag) => tag !== tagDelete));
  };

  return (
    <>
      <input
        name='tags'
        value={tags}
        onChange={handleTagChange}
        onKeyDown={handleKeyDown}
        placeholder='태그를 입력해주세요'
      />
      <div className='tag-list'>
        {tagList.map((tag, index) => (
          <div key={index} className='tag-item'>
            {tag}
            <button
              type='button'
              className='tag-delete-button'
              onClick={() => handleTagDelete(tag)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TagList;
