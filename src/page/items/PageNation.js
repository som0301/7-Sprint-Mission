import "./PageNation.css";

function PageNation({ currentPage, onPageChange }) {
  return (
    <div className="page-box">
      <button className="button left"></button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`button ${page}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button className="button right"></button>
    </div>
  );
}

export default PageNation;
