import arrowDownImg from "@/public/images/icons/ic_arrow_down.svg";
import { MouseEvent, useState } from "react";
import styles from "./Dropdown.module.scss";
import { ArticleApiData } from "@/types/articleTypes";

const FAVORITE_ORDER = "favorite";
const RECENT_ORDER = "recent";

export default function Dropdown({
  onOrderChange,
}: {
  onOrderChange: (newOption: string) => void;
}) {
  const [seletedOption, setSeletedOption] = useState<string>("최신순");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event: MouseEvent<HTMLDivElement>) => {
    const option = event.currentTarget.innerText;
    setSeletedOption(option);
    // 왜 textContent를 사용하면 계속 타입 오류가 발생할까
    // event.target.innerText 으로 할 때도 왜 타입 오류가 발생할까
    onOrderChange(option === "최신순" ? "recent" : "like");
    setIsOpen(false);
  };

  return (
    <div className={styles["droppdown-main"]}>
      <button className={styles.trigger} onClick={handleToggleDropdown}>
        <span className={styles["trigger-text"]}>{seletedOption}</span>
        <img
          className={styles.arrow}
          src={arrowDownImg.src}
          alt="아래 화살표"
        />
      </button>
      {isOpen && (
        <div className={styles["menu-wrapper"]}>
          <div className={styles.menu} onClick={handleOptionClick}>
            최신순
          </div>
          <span className={styles["menu-line"]}></span>
          <div className={styles.menu} onClick={handleOptionClick}>
            좋아요순
          </div>
        </div>
      )}
    </div>
  );
}
