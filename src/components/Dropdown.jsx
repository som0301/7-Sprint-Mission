import iconArrowDown from '/src/assets/ic_arrow_down.svg';
import { useState } from 'react';

import '/src/styles/Dropdown.css';

import iconSort from '/src/assets/ic_sort.svg';

import { useResponsiveApi } from '/src/Responsive';

export function Dropdown({
  className,
  first,
  firstClick,
  second,
  secondClick,
}) {
  return (
    <ul className={`${className} dropdown-ul`}>
      <li className='dropdown-list' onClick={firstClick}>
        {first}
      </li>
      <li className='dropdown-list' onClick={secondClick}>
        {second}
      </li>
    </ul>
  );
}

function DropdownList({ setOrder }) {
  const handleNewClick = () => setOrder('recent');
  const handleBestClick = () => setOrder('favorite');
  return (
    <Dropdown
      first='최신순'
      firstClick={handleNewClick}
      second='좋아요순'
      secondClick={handleBestClick}
    />
  );
}

function ProductDropdown({ setOrder, order }) {
  const [isDropdownView, setDropdownView] = useState(false);
  const { isMobile } = useResponsiveApi();

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };
  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <div className='dropdown' onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button>
          {isMobile ? (
            <img src={iconSort} />
          ) : (
            <>
              <span>{order === 'recent' ? '최신순' : '좋아요순'}</span>
              <img src={iconArrowDown} />
            </>
          )}
        </button>
      </label>
      {isDropdownView && <DropdownList setOrder={setOrder} />}
    </div>
  );
}

export default ProductDropdown;