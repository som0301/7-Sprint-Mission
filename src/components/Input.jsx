import '/src/styles/Color.css';
import styled, { css } from 'styled-components';
import iconTagCancel from '/src/assets/ic_tag_cancel.svg';

const WEIGHTS = {};

const TextStyle = css`
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-800);
`;

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
`;

const StyledInput = styled.input`
  ${InputStyle}
`;

const StyledTextArea = styled.textarea`
  resize: none;
  ${InputStyle}
`;

const StyledTag = styled.div`
  display: inline-flex;
  background-color: var(--gray-50);
  padding: 12px 12px 12px 16px;
  border-radius: 26px;

  ${TextStyle}

  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ImgButton = styled.button`
  margin: 0;
  padding: 0;
`;

export function Tag({ children }) {
  return (
    <StyledTag>
      <span>{children}</span>
      {/* <button type='button'>
        
      </button> */}
      <img src={iconTagCancel} />
    </StyledTag>
  );
}

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
