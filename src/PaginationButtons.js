import './css/pageButton.css';

function PageButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="page-button">
      {children}
    </button>
  );
}

export default function PaginationButtons({ onClick, page, setPage }) {
  const onPreviousPage = () => {
    const isPageOutOfBounds = page <= 1 || page >= 5;
    isPageOutOfBounds ? onClick(page--) : onClick(page);
  };

  const onPagination = ({ target }) => {
    const nextPage = +target.textContent;
    onClick(nextPage);
  };

  const onNextPage = () => {
    const isPageOutOfBounds = page <= 1 || page >= 5;
    isPageOutOfBounds ? onClick(page--) : onClick(page);
  };

  return (
    <div className="pagination-buttons">
      <PageButton onClick={onPreviousPage}>&lt;</PageButton>
      {[1, 2, 3, 4, 5].map((pageNumber) => {
        return (
          <PageButton key={pageNumber} onClick={onPagination}>
            {pageNumber}
          </PageButton>
        );
      })}
      <PageButton onClick={onNextPage}>&gt;</PageButton>
    </div>
  );
}
