import { useState } from 'react';
import iconKebab from '/src/assets/ic_kebab.svg';
import { Dropdown } from './Dropdown';
import styled from 'styled-components';
import { useRef } from 'react';

const KebabButton = styled.button`
  border: none;

  position: absolute;
  top: 0;
  right: 0;
`;

function Kebab() {
  const [isKebab, setIsKebab] = useState(false);
  const optionsRef = useRef < HTMLDivElement > null;

  const handleKebabOpen = () => {
    setIsKebab((prev) => !prev);
  };

  const handleKebabClose = (e) => {
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
