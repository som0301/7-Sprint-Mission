import styled from 'styled-components';

import ArrowLeftICon from 'shared/assets/image/arrow_left.svg';
import ArrowRightICon from 'shared/assets/image/arrow_right.svg';
import { useDeviceType } from 'shared/store';

const TOTAL_PAGES = 5;

export function Pagination({ page, setPage }) {
  const deviceType = useDeviceType();

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePageClick = (currentPage) => {
    setPage(currentPage);
  };

  return (
    <PaginationWrapper $deviceType={deviceType}>
      <PageButton onClick={handlePrevPage} disabled={page === 1}>
        <PrevNextImage src={ArrowLeftICon} alt='이전페이지이동' />
      </PageButton>
      {Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1).map((currentPage) => (
        <PageButton
          key={currentPage}
          $active={currentPage === page}
          onClick={() => handlePageClick(currentPage)}
        >
          {currentPage}
        </PageButton>
      ))}
      <PageButton onClick={handleNextPage} disabled={page === 5}>
        <PrevNextImage src={ArrowRightICon} alt='다음페이지이동' />
      </PageButton>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  column-gap: 4px;
  justify-content: center;

  padding-top: ${({ $deviceType }) => {
    if ($deviceType === 'mobile') return '16px';
  }};
  margin-bottom: ${({ $deviceType }) => {
    if ($deviceType === 'desktop') return '113px';
    if ($deviceType === 'tablet') return '59px';
    if ($deviceType === 'mobile') return '82px';
  }};
`;

const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid var(--gray200);
  border-radius: 50%;
  color: var(--gray600);
  cursor: pointer;
  font-size: 16px;
  line-height: 19.09px;
  font-weight: 600;
  height: 40px;
  width: 40px;

  &:hover {
    background-color: var(--blue);
    color: #fff;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--gray200);
    color: var(--gray400);
  }

  ${({ $active }) =>
    $active &&
    `
            background-color: var(--blue);
            color: #fff;
        `}
`;

const PrevNextImage = styled.img`
  width: 16px;
  height: 16px;
`;
