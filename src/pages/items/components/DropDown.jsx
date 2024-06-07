import { useState } from 'react';
import styled from 'styled-components';
import ArrowDownIcon from 'shared/assets/image/ic_arrow_down.svg';
import SortIcon from 'shared/assets/image/ic_sort.svg';

const DropDownButton = styled.button`
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0 20px;
    border-radius: 12px;
    border: 1px solid var(--gray200);
    background-color: #fff;
    font-size: 16px;
`;

const SortByItem = styled.span`
    font-size: 16px;
    line-height: 24px;
`;

const DropDownMenu = styled.ul`
    position: absolute;
    list-style: none;
    padding: 0;
    margin: 0;
    background: white;
    text-align: center;
    border: 1px solid var(--gray200);
    border-radius: 12px;
    top: 46px;
    left: 0;
    width: 100%;
`;

const DropDownItem = styled.li`
    padding: 12px 20px;
    cursor: pointer;
    &:hover {
        background: var(--gray-100);
    }
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
            <DropDownButton onClick={handleToggle}>
                <SortByItem>{order === 'recent' ? '최신순' : '좋아요순'}</SortByItem>
                <img src={ArrowDownIcon} alt="ArrowDownIcon" />
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
