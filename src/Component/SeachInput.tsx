import InputIcon from "../images/home/inputicon.svg";
import "../../src/style/SechInput.css";

function SeachInput() {
    return (
        <div className="SeachInputLayer">
            <img src={ InputIcon } alt="검색아이콘"></img>
            <input placeholder="검색할 상품을 입력해주세요"></input>
        </div>
    );
}

export default SeachInput;