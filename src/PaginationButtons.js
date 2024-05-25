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
      <PageButton onClick={onPagination}>1</PageButton>
      <PageButton onClick={onPagination}>2</PageButton>
      <PageButton onClick={onPagination}>3</PageButton>
      <PageButton onClick={onPagination}>4</PageButton>
      <PageButton onClick={onPagination}>5</PageButton>
      <PageButton onClick={onNextPage}>&gt;</PageButton>
    </div>
  );
}
