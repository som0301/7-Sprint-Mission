import btn_left from "./images/btn_left.png";
import btn_right from "./images/btn_right.png";
import Page_1 from "./images/Page-1.png";
import Page_2 from "./images/Page-2.png";
import Page_3 from "./images/Page-3.png";
import Page_4 from "./images/Page-4.png";
import Page_5 from "./images/Page-5.png";
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
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
      <button className="button right"></button>
    </div>
  );
}

export default PageNation;
