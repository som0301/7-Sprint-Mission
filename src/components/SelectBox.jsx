import '../styles/SelectBox.css';
import arrowDownImg from '../assets/icons/ic_arrow_down.svg';
import mobileSelectImg from '../assets/icons/ic_sort.svg';
import { useState } from 'react';
import Button from './Button';

function SelectBox({ handleSelect, selectList }) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(selectList[0]);

  const handleOpenList = () => {
    if (isListOpen) {
      setIsListOpen(() => false);
    } else {
      setIsListOpen(() => true);
    }
  };

  const handleSelectItem = (e) => {
    handleSelect(e.target.textContent);
    setSelectedText(() => e.target.textContent);
  };

  return (
    <div className='select-box'>
      <button onClick={handleOpenList} className='select-btn'>
        <p className='selected-text'>{selectedText}</p>
        <img src={arrowDownImg} alt='세모_아이콘' className='ic-down' />
        <img
          src={mobileSelectImg}
          alt='모바일_셀렉트_아이콘'
          className='ic-mobile'
        />
      </button>
      {isListOpen && (
        <button onClick={handleOpenList}>
          <ul className='option-list'>
            {selectList.map((item) => {
              return (
                <Button key={item} onClick={handleSelectItem}>
                  <li className='option-item'>{item}</li>
                </Button>
              );
            })}
          </ul>
        </button>
      )}
    </div>
  );
}

export default SelectBox;
