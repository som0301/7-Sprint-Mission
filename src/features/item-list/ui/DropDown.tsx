import { useState } from 'react';
import styled from 'styled-components';
import ArrowDownIcon from 'public/images/ic_arrow_down.svg';
import SortIcon from 'public/images/ic_sort.svg';
import { useViewport } from 'shared/hook';
import { DeviceType } from 'shared/type';

const DropDownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 24px;
  border-radius: 12px;
  border: 1px solid var(--gray200);
  background-color: #fff;
  font-size: 16px;
  padding: ${({ $deviceType }) =>
    $deviceType === 'mobile' ? '0 9px' : '0 20px'};
`;

const DropDownIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const SortByItem = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

const DropDownMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  text-align: center;
  border: 1px solid var(--gray200);
  border-radius: 12px;
  top: 46px;
  right: 0;
  width: 130px;
  z-index: 1;
`;

const DropDownItem = styled.li`
  padding: 12px 20px;
  border-bottom: 1px solid var(--gray200);
  &:last-child {
    border-bottom: none;
  }
  cursor: pointer;
`;

function DropDown({ deviceType, order, setOrder }: DeviceType) {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useViewport();

  const buttonText = order === 'recent' ? '최신순' : '좋아요순';
  const orderType = [
    {
      type: 'recent',
      text: '최신순',
    },
    {
      type: 'favorite',
      text: '좋아요순',
    },
  ];

  const handleToggle = () => setIsOpen(!isOpen);
  const handleChangeOrder = (newOrder) => {
    setOrder(newOrder);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownButton $deviceType={deviceType} onClick={handleToggle}>
        {!isMobile && <SortByItem>{buttonText}</SortByItem>}
        <DropDownIcon
          $deviceType={deviceType}
          src={isMobile ? SortIcon : ArrowDownIcon}
          alt='ArrowDownIcon'
        />
      </DropDownButton>

      {isOpen && (
        <DropDownMenu>
          {orderType.map((item) => (
            <DropDownItem
              key={item.type}
              onClick={() => handleChangeOrder(item.type)}
            >
              {item.text}
            </DropDownItem>
          ))}
        </DropDownMenu>
      )}
    </>
  );
}

export default DropDown;
