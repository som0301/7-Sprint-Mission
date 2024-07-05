import '../styles/Pagination.scss';
import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';

const VISIBLE_PAGE_COUNT = 5;

interface Props {
  totalProdCount: number;
  page: number;
  allProdPageSize: number;
  onClickPage: (pageNum: number) => void;
}

interface PageButton {
  page: number;
  state: string;
}

function Pagination({
  totalProdCount,
  page,
  allProdPageSize,
  onClickPage,
}: Props) {
  const [pageButtons, setPageButtons] = useState<PageButton[]>([]);

  const handlePage = () => {
    const enablePageCount = totalProdCount / allProdPageSize;
    const newPageButtons = [];
    for (let i = 0; i < VISIBLE_PAGE_COUNT; i++) {
      if (i + 1 === page) {
        newPageButtons.push({ page: i + 1, state: 'focus' });
      } else if (i < enablePageCount) {
        newPageButtons.push({ page: i + 1, state: 'enable' });
      } else {
        newPageButtons.push({ page: i + 1, state: 'disable' });
      }
    }
    setPageButtons(newPageButtons);
  };

  useEffect(() => {
    handlePage();
  }, [page, allProdPageSize, totalProdCount]);

  const pageClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    onClickPage(Number(target.textContent));
  };

  return (
    <div className='pagination'>
      <button className='btn-prev'>&lt;</button>
      {pageButtons.map((item) => {
        return (
          <>
            {item.state === 'focus' && (
              <button key={'focus_' + item.page} className='btn-focus'>
                {item.page}
              </button>
            )}
            {item.state === 'enable' && (
              <button key={'enable_' + item.page} onClick={pageClick}>
                {item.page}
              </button>
            )}
            {item.state === 'disable' && (
              <button key={'disable_' + item.page} className='btn-disabled'>
                {item.page}
              </button>
            )}
          </>
        );
      })}
      <button className='btn-next'>&gt;</button>
    </div>
  );
}

export default Pagination;
