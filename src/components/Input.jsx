import '/src/styles/Color.css';
import styled from 'styled-components';

const WEIGHTS = {};

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

export const StyledInput = styled.input`
  width: 100%;
  background-color: var(--gray-100);
  position: relative;

  font-size: 16px;
  font-weight: 400;

  padding: 16px 24px;
  border: none;
  border-radius: 12px;

  &::placeholder {
    color: var(--gray-400);

    position: absolute;
    top: 16px;
    left: 24px;
  }
  height: ${({ type }) => (type === 'textarea' ? `200px` : ``)};
`;

export default function Input({ htmlFor, type, id, placeholder, children }) {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
      <StyledInput type={type} id={id} placeholder={placeholder} />
    </StyledInputContainer>
  );
}
