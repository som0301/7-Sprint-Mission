import React, { useEffect, useState } from "react";
import visibilityOn from "../../../assets/images/icons/btn_visibility_on.svg";
import visibilityOff from "../../../assets/images/icons/btn_visibility_off.svg";

interface Props {
  onPasswordVisible: (isVisible: boolean) => void;
}

const TogglePassword: React.FC<Props> = ({ onPasswordVisible }) => {
  const [isVisible, setVisible] = useState(false);
  const imgToggle = isVisible ? visibilityOn : visibilityOff;

  const handleClick = () => {
    const updatedVisible = !isVisible;
    setVisible(updatedVisible);
    onPasswordVisible(updatedVisible);
  };

  useEffect(() => {}, [isVisible]);

  return (
    <button onClick={handleClick} className="visibility-button" type="button">
      <img
        className="visibility-off"
        src={imgToggle}
        alt="비밀번호 가리기"
        width="24"
      />
    </button>
  );
};

export default TogglePassword;
