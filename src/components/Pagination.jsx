import btnLeft from "/src/assets/btn_pagination_left.svg";
import btnRight from "/src/assets/btn_pagination_right.svg";
import iconPage01 from "/src/assets/ic_pagination_1_active.svg";
import iconPage02 from "/src/assets/ic_pagination_2.svg";
import iconPage03 from "/src/assets/ic_pagination_3.svg";
import iconPage04 from "/src/assets/ic_pagination_4.svg";
import iconPage05 from "/src/assets/ic_pagination_5.svg";

function Pagination() {
  return (
    <div className="pagination">
      <img src={btnLeft} />
      <img src={iconPage01} />
      <img src={iconPage02} />
      <img src={iconPage03} />
      <img src={iconPage04} />
      <img src={iconPage05} />
      <img src={btnRight} />
    </div>
  );
}

export default Pagination;
