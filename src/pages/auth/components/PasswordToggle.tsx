import invisible from "../../../assets/images/icons/eye-invisible.svg";
import visible from "../../../assets/images/icons/eye-visible.svg";
import React, { useState } from "react";

interface PasswordToggleProps {
  id: string;
  name: string;
  placeholder: string;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({
  id,
  name,
  placeholder,
}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const toggleVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className='password-box'>
      <input
        type={visiblePassword ? "text" : "password"}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <img
        src={visiblePassword ? visible : invisible}
        alt='비밀번호-숨김'
        className='password-button'
        onClick={toggleVisibility}
      />
    </div>
  );
};

export default PasswordToggle;
