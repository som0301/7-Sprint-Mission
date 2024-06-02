import { useState } from 'react';
import { Input } from '../pages/AddItemPage';
import styled from 'styled-components';

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Tag = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px;
  padding-left: 16px;
  margin-top: 12px;
  border-radius: 26px;
  background-color: #f9fafb;
`;

const TagContent = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #1f2937;
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #9ca3af;
  font-weight: 900;
  font-size: 12px;
  color: #ffffff;
`;

export default function TagInput({ name, value = [], onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const nextValue = e.target.value.trim().split(' ');
      const distinctNextValue = [...new Set([...value, ...nextValue])];
      onChange(name, distinctNextValue);
      setInputValue('');
      e.preventDefault();
    }
  };

  const handleDelete = (e) => {
    const targetID = e.target.id;
    const targetIndex = value.indexOf(targetID);
    onChange(name, [
      ...value.slice(0, targetIndex),
      ...value.slice(targetIndex + 1),
    ]);
  };

  return (
    <>
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="태그를 입력해주세요"
        required
      />
      {value[0] && (
        <Tags>
          {value.map((item) => {
            return (
              <Tag key={item}>
                <TagContent>{item}</TagContent>
                <DeleteButton onClick={handleDelete} id={item} type="button">
                  X
                </DeleteButton>
              </Tag>
            );
          })}
        </Tags>
      )}
    </>
  );
}

export { DeleteButton };
