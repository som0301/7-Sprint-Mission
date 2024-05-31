import styled, { css } from 'styled-components';

export const StyledMain = styled.div`
  width: 1200px;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

export const StyledSignMain = styled.main`
  width: 640px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;

  @media (max-width: 1199px) {
    width: 100%;
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;

const FormStyle = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 767px) {
    gap: 16px;
  }
`;

export const StyledForm = styled.form`
  ${FormStyle}
  padding-top: 24px;

  @media (max-width: 1199px) {
    padding-top: 16px;
  }
`;

export const StyledFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormHeaderTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

export const StyledSignForm = styled.form`
  ${FormStyle}
  width: 100%;
`;
