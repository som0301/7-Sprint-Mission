import '../styles/pageButton.css';

function PageButton({ children, onClick, isActive, isLoading }) {
  return (
    <button
      onClick={onClick}
      className={`page-button ${isActive ? 'page-button__active' : ''}`}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

export default function PaginationButtons({
  onClick,
  page,
  setPage,
  isLoading,
}) {
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
      <PageButton onClick={onPreviousPage} isLoading={isLoading}>
        &lt;
      </PageButton>
      {[1, 2, 3, 4, 5].map((pageNumber) => {
        return (
          <PageButton
            key={pageNumber}
            isActive={page === pageNumber}
            onClick={() => {
              onPagination(pageNumber);
            }}
            isLoading={isLoading}
          >
            {pageNumber}
          </PageButton>
        );
      })}
      <PageButton onClick={onNextPage} isLoading={isLoading}>
        &gt;
      </PageButton>
    </div>
  );
}
