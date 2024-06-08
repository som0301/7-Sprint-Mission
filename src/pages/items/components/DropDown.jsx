import { useState } from 'react';
import styled from 'styled-components';
import ArrowDownIcon from 'shared/assets/image/ic_arrow_down.svg';
import SortIcon from 'shared/assets/image/ic_sort.svg';

const DropDownButton = styled.button`
    display: flex;
    align-items: center;
    gap: 24px;
    border-radius: 12px;
    border: 1px solid var(--gray200);
    background-color: #fff;
    font-size: 16px;padding: ${({ $deviceType }) => {
        if ($deviceType === 'mobile') return '0 9px';
        if ($deviceType !== 'mobile') return '0 20px;';
    }}}
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
`;

const DropDownItem = styled.li`
    padding: 12px 20px;
    border-bottom: 1px solid var(--gray200);
    &:last-child {
        border-bottom: none;
    }
    cursor: pointer;
`;

function DropDown({ deviceType, order, setOrder }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);
    const handleChangeOrder = (newOrder) => {
        setOrder(newOrder);
        setIsOpen(false);
    };
    return (
        <>
            <DropDownButton $deviceType={deviceType} onClick={handleToggle}>
                {deviceType !== 'mobile' && <SortByItem>{order === 'recent' ? '최신순' : '좋아요순'}</SortByItem>}
                <DropDownIcon
                    $deviceType={deviceType}
                    src={deviceType === 'mobile' ? SortIcon : ArrowDownIcon}
                    alt="ArrowDownIcon"
                />
            </DropDownButton>
            {isOpen && (
                <DropDownMenu>
                    <DropDownItem onClick={() => handleChangeOrder('recent')}>최신순</DropDownItem>
                    <DropDownItem onClick={() => handleChangeOrder('favorite')}>좋아요순</DropDownItem>
                </DropDownMenu>
            )}
        </>
    );
}

export default DropDown;
