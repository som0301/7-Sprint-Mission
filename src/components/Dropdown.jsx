import iconArrowDown from "/src/assets/ic_arrow_down.svg";
import { useState } from "react";

import "/src/styles/Dropdown.css";

const cursorPointerStyle = {
  curser: "pointer",
};

function DropdownList() {
  return (
    <ul class="dropdown-ul">
      <li class="dropdown-list">최신순</li>
      <li class="dropdown-list">좋아요순</li>
    </ul>
  );
}

function Dropdown() {
  const [isDropdownView, setDropdownView] = useState(false);
  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };
  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <div className="dropdown" onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button>
          <span>최신순</span>
          {/* //TODO: 최신순&좋아요순을 눌렀을 때 span 태그의 내용이 바뀌도록 수정 */}
          <img src={iconArrowDown} />
        </button>
      </label>
      {isDropdownView && <DropdownList />}
    </div>
  );
}

export default Dropdown;
