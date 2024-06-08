import { Link } from "react-router-dom";
import backImg from "../../../assets/images/icons/ic_back.svg";
const GoBackToListButton = () => {
  return (
    <>
      <button>
        <Link to="/items">
          목록으로 돌아가기
          <img src={backImg} alt="뒤로 돌아가는 화살표" />
        </Link>
      </button>
    </>
  );
};

export default GoBackToListButton;
