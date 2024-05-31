import styled from "styled-components";

const ImgInput = styled.div`
  width: inherit;
  height: inherit;

  & label {
    margin: 0;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

export default ImgInput;
