import styles from './index.module.scss';
import Image from 'next/image';
import { IconArrowDown, IconSort } from '@/public';
import { MouseEvent, useState } from 'react';
// import { useState } from 'react';
import Button from '@/components/Button';
// import Button from './Button';
import { SELECT_ORDER, SelectdValue, selectList } from '@/types/select-order.d';

interface Props {
  handleSelect: (selectedValue: SelectdValue) => void;
  selectList: typeof selectList;
}

function SelectBox({ handleSelect, selectList }: Props) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedText, setSelectedText] = useState<SelectdValue>(selectList[0]);

  const handleOpenList = () => {
    if (isListOpen) {
      setIsListOpen(() => false);
    } else {
      setIsListOpen(() => true);
    }
  };

  const handleSelectItem = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const textContent = target.textContent as SelectdValue;

    if (textContent !== null) {
      handleSelect(textContent);
      setSelectedText(() => textContent);
    } else {
      console.warn('textContent is null');
    }
  };

  return (
    <div className={styles.selectBox}>
      <button onClick={handleOpenList} className={styles.selectBtn}>
        <p className={styles.selectedText}>{selectedText}</p>
        <Image
          src={IconArrowDown}
          alt='세모 아이콘'
          className={styles.icDown}
        />
        <Image
          src={IconSort}
          alt='모바일 셀렉트 아이콘'
          className={styles.icMobile}
        />
      </button>
      {isListOpen && (
        <div onClick={handleOpenList} role='presentation'>
          <ul className={styles.optionList}>
            {selectList.map((item) => {
              return (
                <Button
                  key={item}
                  onClick={handleSelectItem}
                  className={styles.button}
                >
                  <li className={styles.optionItem}>{item}</li>
                </Button>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectBox;
