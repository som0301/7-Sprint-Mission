import { useState } from 'react';
import iconKebab from '@assets/images/ic_kebab.svg';
import { Dropdown } from '@components/Dropdown';
import styled from 'styled-components';
import { useRef } from 'react';

const KebabButton = styled.button`
  border: none;

  position: absolute;
  top: 0;
  right: 0;
`;

function Kebab() {
  const [isKebab, setIsKebab] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleKebabOpen = () => {
    setIsKebab((prev) => !prev);
  };

  const handleKebabClose = (e: any) => {
    // e 타입에 FocusEvent도 안되고 뭘 넣어야할지 모르겠음..
    if (!optionsRef.current?.contains(e.relatedTarget)) {
      setIsKebab(false);
    }
  };

  return (
    <>
      <KebabButton onBlur={handleKebabClose}>
        <img src={iconKebab} alt='kebab' onClick={handleKebabOpen} />
      </KebabButton>
      {isKebab && (
        <Dropdown first='수정' second='삭제' className='kebab-drowdown' />
      )}
    </>
  );
}

export default Kebab;
