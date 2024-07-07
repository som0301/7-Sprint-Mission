import '../styles/SelectBox.scss';
import arrowDownImg from '../assets/icons/ic_arrow_down.svg';
import mobileSelectImg from '../assets/icons/ic_sort.svg';
import { useState } from 'react';
import Button from './Button';
import { MouseEvent } from 'react';

interface Props {
  handleSelect: (selectedValue: string) => void;
  selectList: string[];
}

function SelectBox({ handleSelect, selectList }: Props) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(selectList[0]);

  const handleOpenList = () => {
    if (isListOpen) {
      setIsListOpen(() => false);
    } else {
      setIsListOpen(() => true);
    }
  };

  const handleSelectItem = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const textContent = target.textContent;

    if (textContent !== null) {
      handleSelect(textContent);
      setSelectedText(() => textContent);
    } else {
      console.warn('textContent is null');
    }
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
