import "../styles/Pagination.css";
import { useEffect, useState } from "react";

function Pagination({ totalProdCount, page, allProdPageSize, onClickPage }) {
  const [pageButtons, setPageButtons] = useState([]);
  const visiblePageCount = 5;

  const handlePage = () => {
    const enablePageCount = totalProdCount / allProdPageSize;
    const newPageButtons = [];
    for (let i = 0; i < visiblePageCount; i++) {
      if (i + 1 === page) {
        newPageButtons.push({ page: i + 1, state: "focus" });
      } else if (i < enablePageCount) {
        newPageButtons.push({ page: i + 1, state: "enable" });
      } else {
        newPageButtons.push({ page: i + 1, state: "disable" });
      }
    }
    setPageButtons(newPageButtons);
  };

  useEffect(() => {
    handlePage();
  }, [page, allProdPageSize, totalProdCount]);

  const pageClick = (e) => {
    onClickPage(Number(e.target.textContent));
  };

  return (
    <div className="Pagination">
      <span className="Pagination-btn-disabled">&lt;</span>
      {pageButtons.map((item, index) => {
        return (
          <>
            {item.state === "focus" && (
              <span key={item.page} className="Pagination-btn-focus">
                {item.page}
              </span>
            )}
            {item.state === "enable" && (
              <span key={item.page} onClick={pageClick}>
                {item.page}
              </span>
            )}
            {item.state === "disable" && (
              <span key={item.page} className="Pagination-btn-disabled">
                {item.page}
              </span>
            )}
          </>
        );
      })}
      <span className="Pagination-btn-disabled">&gt;</span>
    </div>
  );
}

export default Pagination;
