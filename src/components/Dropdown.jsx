import iconArrowDown from "/src/assets/ic_arrow_down.svg";
import { useState } from "react";

import "/src/styles/Dropdown.css";

const cursorPointerStyle = {
  curser: "pointer",
};

function DropdownList({ setOrder }) {
  const handleNewClick = () => setOrder("recent");
  const handleBestClick = () => setOrder("favorite");
  return (
    <ul class="dropdown-ul">
      <li class="dropdown-list" onClick={handleNewClick}>
        최신순
      </li>
      <li class="dropdown-list" onClick={handleBestClick}>
        좋아요순
      </li>
    </ul>
  );
}

function Dropdown({ setOrder, order }) {
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
          <span>{order === "recent" ? "최신순" : "좋아요순"}</span>
          {/* //TODO: 최신순&좋아요순을 눌렀을 때 span 태그의 내용이 바뀌도록 수정 */}
          <img src={iconArrowDown} />
        </button>
      </label>
      {isDropdownView && <DropdownList setOrder={setOrder} />}
    </div>
  );
}

export default Dropdown;
