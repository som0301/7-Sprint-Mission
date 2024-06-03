import { useState } from "react";
import ImgInput from "../styledComponets/ImgInput";

function FileInput({ name, value, onChange, children }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };
  return (
    <ImgInput>
      <label htmlFor="file">{children}</label>
      <input type="file" id="file" onChange={handleChange}></input>
    </ImgInput>
  );
}

export default FileInput;
