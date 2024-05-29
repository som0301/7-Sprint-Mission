import "../styles/Pagination.css";
import { useEffect, useState } from "react";

const VISIBLE_PAGE_COUNT = 5;

function Pagination({ totalProdCount, page, allProdPageSize, onClickPage }) {
  const [pageButtons, setPageButtons] = useState([]);

  const handlePage = () => {
    const enablePageCount = totalProdCount / allProdPageSize;
    const newPageButtons = [];
    for (let i = 0; i < VISIBLE_PAGE_COUNT; i++) {
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
    <div className="pagination">
      <button className="btn-disabled">&lt;</button>
      {pageButtons.map((item, index) => {
        return (
          <>
            {item.state === "focus" && (
              <button key={item.page} className="btn-focus">
                {item.page}
              </button>
            )}
            {item.state === "enable" && (
              <button key={item.page} onClick={pageClick}>
                {item.page}
              </button>
            )}
            {item.state === "disable" && (
              <button key={item.page} className="btn-disabled">
                {item.page}
              </button>
            )}
          </>
        );
      })}
      <button className="btn-disabled">&gt;</button>
    </div>
  );
}

export default Pagination;
