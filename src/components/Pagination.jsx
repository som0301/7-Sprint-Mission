import btnLeft from "/src/assets/btn_pagination_left.svg";
import btnRight from "/src/assets/btn_pagination_right.svg";
import iconPage01 from "/src/assets/ic_pagination_1_active.svg";
import iconPage02 from "/src/assets/ic_pagination_2.svg";
import iconPage03 from "/src/assets/ic_pagination_3.svg";
import iconPage04 from "/src/assets/ic_pagination_4.svg";
import iconPage05 from "/src/assets/ic_pagination_5.svg";

function Pagination({ setPage, page }) {
  const handleLoadPrevPage = () => {
    const prevPage = page > 1 ? page - 1 : 5;
    setPage(prevPage);
  };

  const handleLoadNextPage = () => {
    const nextPage = page < 5 ? page + 1 : 1;
    setPage(nextPage);
  };

  const handleLoadPage = (pageNum) => {
    const page = pageNum;
    setPage(page);
  };

  return (
    <div className="pagination">
      <button onClick={handleLoadPrevPage}>
        <img src={btnLeft} />
      </button>
      <button onClick={() => handleLoadPage(1)}>
        <img src={iconPage01} />
      </button>
      <button onClick={() => handleLoadPage(2)}>
        <img src={iconPage02} />
      </button>
      <button onClick={() => handleLoadPage(3)}>
        <img src={iconPage03} />
      </button>
      <button onClick={() => handleLoadPage(4)}>
        <img src={iconPage04} />
      </button>
      <button onClick={() => handleLoadPage(5)}>
        <img src={iconPage05} />
      </button>
      <button onClick={handleLoadNextPage}>
        <img src={btnRight} />
      </button>
    </div>
  );
}

export default Pagination;
