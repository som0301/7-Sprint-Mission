import InputIcon from "@/public/images/home/inputicon.svg";
import style from "@/styles/SechInput.module.css";
import Image from "next/image";

function SeachInput() {
    return (
        <div className={style.SeachInputLayer}>
            <Image src={ InputIcon } alt="검색아이콘" />
            <input placeholder="검색할 상품을 입력해주세요"></input>
        </div>
    );
}

export default SeachInput;