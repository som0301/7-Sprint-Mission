import styles from './index.module.scss';
import Image from 'next/image';
import { IconArrowDown, IconSort } from '@/public';
import { MouseEvent, useState } from 'react';
// import { useState } from 'react';
import Button from '@/components/Button';
// import Button from './Button';

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
        <button onClick={handleOpenList}>
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
        </button>
      )}
    </div>
  );
}

export default SelectBox;
