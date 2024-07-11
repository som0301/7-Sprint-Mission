import InputIcon from "@/public/images/home/inputicon.svg";
import style from "@/styles/SechInput.module.css";

function SeachInput() {
    return (
        <div className={style.SeachInputLayer}>
            <img src={ InputIcon } alt="검색아이콘"></img>
            <input placeholder="검색할 상품을 입력해주세요"></input>
        </div>
    );
}

export default SeachInput;