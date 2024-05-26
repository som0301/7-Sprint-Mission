import arrowLeftImg from "../assets/images/icons/arrow_left.svg";
import arrowRightImg from "../assets/images/icons/arrow_right.svg";
import { getCustomRound, getPageNumber } from "../utils/Utils";

const ITEM_INIT = 10;

function Pagination({ totalCount }) {
  const pageNumber = getPageNumber(getCustomRound(totalCount / ITEM_INIT));
  // 현재 몇번째 페이지인지
  // const [currentPage, setCurrentPage] = useState(1);

  const handleLodePage = () => {};

  return (
    <>
      <div className="circle">
        <img
          className="arrow-image arrow-left"
          src={arrowLeftImg}
          alt="왼쪽 화살표"
        />
      </div>
      <div className="page-nums">
        {pageNumber?.map((num, index) => {
          return (
            <div className="circle" key={index} onClick={handleLodePage}>
              {num}
            </div>
          );
        })}
      </div>
      <div className="circle">
        <img
          className="arrow-image arrow-right"
          src={arrowRightImg}
          alt="오른쪽 화살표"
        />
      </div>
    </>
  );
}
export default Pagination;
