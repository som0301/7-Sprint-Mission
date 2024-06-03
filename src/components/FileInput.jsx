import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { DeleteButton } from './TagInput';

const card = css`
  width: 168px;
  height: 168px;
  border-radius: 12px;
`;

const ImageInputLabel = styled.label`
  ${card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 42px 0;
  background-color: #f3f4f6;
  color: #9ca3af;
`;

const ImageInputPlus = styled.span`
  display: block;
  font-size: 48px;
  line-height: 48px;
`;

const ImagePreviewCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ImagePreviewCard = styled.li`
  position: relative;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ImagePreview = styled.img`
  ${card};
`;

const ImageDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export default function FileInput({ name, value = [], onChange }) {
  const [previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, [...value, nextValue]);
  };

  const handleDelete = (e) => {
    const targetPreview = e.target.id;
    const targetIndex = previews.indexOf(targetPreview);
    onChange(name, [
      ...value.slice(0, targetIndex),
      ...value.slice(targetIndex + 1),
    ]);
  };

  useEffect(() => {
    const nextPreviews = value.map((item) => URL.createObjectURL(item));
    setPreviews((prevPreviews) => [...nextPreviews]);

    return () => {
      value.forEach((item) => URL.revokeObjectURL(item));
    };
  }, [value]);

  return (
    <>
      <input
        id="fileinput"
        onChange={handleChange}
        type="file"
        style={{ display: 'none' }}
      />
      <ImagePreviewCards>
        <ImageInputLabel htmlFor="fileinput">
          <ImageInputPlus>+</ImageInputPlus>이미지 등록
        </ImageInputLabel>
        {previews[0] &&
          previews.map((item) => {
            return (
              <ImagePreviewCard key={item}>
                <ImagePreview src={item} alt="이미지 미리보기" />
                <ImageDeleteButton
                  id={item}
                  type="button"
                  onClick={handleDelete}
                >
                  X
                </ImageDeleteButton>
              </ImagePreviewCard>
            );
          })}
      </ImagePreviewCards>
    </>
  );
}
