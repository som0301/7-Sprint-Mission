import './css/pageButton.css';

function PageButton({ children, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`page-button ${isActive ? 'page-button__active' : ''}`}
    >
      {children}
    </button>
  );
}

export default function PaginationButtons({ onClick, page, setPage }) {
  const onPreviousPage = () => {
    const isPageOutOfBounds = page <= 1;
    isPageOutOfBounds || onClick(page - 1);
  };

  const onPagination = (nextPage) => {
    onClick(nextPage);
  };

  const onNextPage = () => {
    const isPageOutOfBounds = page >= 5;
    isPageOutOfBounds || onClick(page + 1);
  };

  return (
    <div className="pagination-buttons">
      <PageButton onClick={onPreviousPage}>&lt;</PageButton>
      {[1, 2, 3, 4, 5].map((pageNumber) => {
        return (
          <PageButton
            key={pageNumber}
            isActive={page === pageNumber}
            onClick={() => {
              onPagination(pageNumber);
            }}
          >
            {pageNumber}
          </PageButton>
        );
      })}
      <PageButton onClick={onNextPage}>&gt;</PageButton>
    </div>
  );
}
