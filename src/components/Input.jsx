import '/src/styles/Color.css';
import styled, { css } from 'styled-components';
import iconTagCancel from '/src/assets/ic_tag_cancel.svg';
import iconPlus from '/src/assets/ic_plus.svg';
import iconImageCancel from '/src/assets/ic_cancel.svg';
import { useEffect, useRef, useState } from 'react';

/* text style css 함수 */
const TextStyle = css`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-800);
`;

/* input */
export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: var(--gray-800);
`;

const InputStyle = css`
  width: 100%;
  background-color: var(--gray-100);
  position: relative;

  ${TextStyle}

  padding: 16px 24px;
  border: none;
  border-radius: 12px;

  &::placeholder {
    color: var(--gray-400);

    position: absolute;
    top: 16px;
    left: 24px;
  }

  &:focus {
    outline: 2px solid var(--main-color);
  }
`;

const StyledInput = styled.input`
  ${InputStyle}
`;

const StyledTextArea = styled.textarea`
  resize: none;
  ${InputStyle}
`;

export function Input({
  name,
  value,
  type,
  id,
  placeholder,
  children,
  onChange,
  onKeyDown,
  onKeyUp,
}) {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={id}>{children}</StyledLabel>
      {type === 'textarea' ? (
        <StyledTextArea
          name={name}
          value={value}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          rows='5'
        />
      ) : (
        <StyledInput
          name={name}
          value={value}
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        />
      )}
    </StyledInputContainer>
  );
}

/* tag */

const TagStyle = css`
  display: inline-flex;
  background-color: var(--gray-50);
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${TextStyle}
`;

const StyledTag = styled.div`
  padding: 12px 12px 12px 16px;
  ${TagStyle}
`;

export const StyledProductTag = styled.div`
  ${TagStyle}
  padding: 6px 16px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 12px;
  margin-top: 12px;

  & img:hover {
    cursor: pointer;
  }
`;

export function Tag({ idx, children, onClick }) {
  const tagRef = useRef();
  const handleClick = () => {
    const tagNode = tagRef.current;
    if (!tagNode) return;

    tagNode.value = '';
    onClick(idx);
  };

  return (
    <StyledTag ref={tagRef}>
      <span>{children}</span>
      <img src={iconTagCancel} onClick={handleClick} />
    </StyledTag>
  );
}

/* file */
const imgStyle = css`
  width: 282px;
  height: 282px;

  @media (max-width: 1199px) {
    width: 162px;
    height: 162px;
  }
  @media (max-width: 767px) {
    width: 168px;
    height: 168px;
  }
`;

const StyledFileUploadButton = styled.button`
  ${InputStyle}
  ${imgStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & > span {
    color: var(--gray-400);
  }
`;

function FileUploadButton({ onClick }) {
  return (
    <StyledFileUploadButton type='button' onClick={onClick}>
      <img src={iconPlus} alt='이미지 등록' />
      <span>이미지 등록</span>
    </StyledFileUploadButton>
  );
}

const File = styled.input`
  visibility: hidden;
  position: absolute;
`;

const PreviewImagediv = styled.div`
  ${imgStyle}
  position:relative;

  & > img:first-child {
    ${imgStyle}
    border-radius: 12px;
  }

  & > img:last-child {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const FileUploadContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 16px;
  }
  @media (max-width: 767px) {
    gap: 8px;
  }
`;

export function PreviewImage({ preview, onClick }) {
  return (
    <PreviewImagediv>
      {/* <StyledPreviewImage src={preview} alt='이미지 미리보기' /> */}
      <img src={preview} alt='이미지 미리보기' />
      <img src={iconImageCancel} alt='취소' onClick={onClick} />
    </PreviewImagediv>
  );
}

export function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextImage = e.target.files[0];
    onChange(name, nextImage);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  return (
    <>
      <FileUploadContainer>
        <FileUploadButton
          onClick={() => {
            inputRef.current?.click();
          }}
        ></FileUploadButton>

        <File
          type='file'
          accept='image/png, image/jpeg'
          onChange={handleChange}
          ref={inputRef}
        />
        {value && <PreviewImage preview={preview} onClick={handleClearClick} />}
      </FileUploadContainer>
    </>
  );
}
