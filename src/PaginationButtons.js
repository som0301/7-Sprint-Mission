import './css/pageButton.css';

function PageButton({ children }) {
  return <button className="page-button">{children}</button>;
}

export default function PaginationButtons(onClick, page) {
  const onPagination = () => {
    onclick(1);
  };
  return (
    <div className="pagination-buttons">
      <PageButton onClick={onPagination}>&lt;</PageButton>
      <PageButton onClick={onPagination}>1</PageButton>
      <PageButton onClick={onPagination}>2</PageButton>
      <PageButton onClick={onPagination}>3</PageButton>
      <PageButton onClick={onPagination}>4</PageButton>
      <PageButton onClick={onPagination}>5</PageButton>
      <PageButton onClick={onPagination}>&gt;</PageButton>
    </div>
  );
}
