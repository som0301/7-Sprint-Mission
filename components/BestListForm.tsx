import Image from "next/image";
import styles from "./BestListForm.module.css";
import medalIcon from "../public/medal_icon.svg";
import heart from "../public/heart.svg";

export default function BestListForm() {
  return (
    <>
      <form className={styles["BestList-form"]}>
        <div className={styles["BestList-badge"]}>
          <div className={styles["BestList-wrapper-badge"]}>
            <Image src={medalIcon} alt="메달" width="16" height="16" />
            <span className={styles["BestList-badge-best"]}>Best</span>
          </div>
        </div>

        <div className={styles["BestList-wrapper-h3"]}>
          <h3 className={styles["BestList-h3"]}>제목</h3>
          <div className={styles["BestList-img"]}>
            <Image src={heart} alt="하트" />
          </div>
        </div>

        <div className={styles["BestList-wrapper"]}>
          <div className={styles["BestList-wrapper-name"]}>
            <span className={`${styles["BestList-span"]} ${styles.name}`}>
              별명
            </span>
            <div className={styles["BestList-wrapper-heart"]}>
              <Image src={heart} alt="하트" width="16" height="16" />
              <span
                className={`${styles["BestList-span"]} ${styles.favoriteCount}`}
              >
                10
              </span>
            </div>
          </div>
          <span className={`${styles["BestList-span"]} ${styles.date}`}>
            2024
          </span>
        </div>
      </form>
    </>
  );
}
