import { useState } from 'react';

const TagInput = ({ isValueCheck }) => {
  const [tagArr, setTagArr] = useState(new Set());
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setTagArr((prev) => new Set([...prev, inputValue.trim()]));
      setInputValue('');
      isValueCheck(inputValue, 'tag');
    }
  };

  const handleDeleteClick = (tagName) => {
    const deleteTag = [...tagArr].filter((tag) => tagName !== tag);

    setTagArr(new Set([...deleteTag]));
    isValueCheck(deleteTag, 'tag');
  };

  return (
    <>
      <label htmlFor="item-tag">태그</label>
      <input
        type="text"
        placeholder="태그를 입력해주세요"
        value={inputValue}
        onKeyUp={handleKeyUp}
        onChange={handleInputChange}
      />
      {[...tagArr].map((tag, index) => (
        <div key={index} className="tag-box">
          <div className="tag-flex">
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => handleDeleteClick(tag)}
            ></button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TagInput;
