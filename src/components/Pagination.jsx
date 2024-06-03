import "../styles/Pagination.css";

function Pagination({ currentPage, setPage }) {
  const TOTAL_PAGES = 5;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < TOTAL_PAGES) {
      setPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button className="pagination-button" onClick={handlePrevious}>
        &lt;
      </button>

      {[...Array(TOTAL_PAGES)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`pagination-button ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        );
      })}

      <button className="pagination-button" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
