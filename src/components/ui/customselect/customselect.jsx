import { classModuleName } from '../../../modules';
import styles from './customselelct.module.css';
import { useState } from 'react';

const customLiTagValue = [
  { id: 1, value: 'recent' },
  { id: 2, value: 'favorite' },
]

const valueToText = {
  recent: '최신순',
  favorite: '좋아요순',
}

function CustomSelect({onChange, orderBy}) {
  const [isFocus, setIsFocus] = useState(false);

  const handleSelectOnClick = (e) => {
    e.preventDefault();
    const nextIsFocus = !isFocus;
    setIsFocus(nextIsFocus);
  };


  const handleValueOnclick = (e) => {
    const nextValue = e.target.getAttribute('data-value');
    onChange(nextValue);
  }

  return (
    <div className={classModuleName("select",styles)}>
      <div className={classModuleName("selected",styles)} tabIndex='0' onFocus={handleSelectOnClick} onBlur={handleSelectOnClick}>
        <div className={classModuleName("selected-value",styles)}>{valueToText[orderBy]}</div>
        <div className={classModuleName("arrow",styles)}></div>
      </div>
      {isFocus && <ul className={classModuleName("option-container",styles)}>
        <li key={customLiTagValue[0].id} data-value={customLiTagValue[0].value} onMouseDown={handleValueOnclick}>최신순</li>
        <div className={classModuleName("option-line",styles)}></div>
        <li key={customLiTagValue[1].id} data-value={customLiTagValue[1].value} onMouseDown={handleValueOnclick}>좋아요순</li>
      </ul>}
    </div>
  );
}

export default CustomSelect;
