import Image from "next/image";
import styles from "./BoardDetail.module.css";
import profile from "../public/profile.svg";
import heart from "../public/heart.svg";

export default function BoardDetailInfo() {
  return (
    <>
      <section className={styles["detail-wrapper"]}>
        <h1 className={styles.h1}>맥북</h1>
        <div className={styles["detail-wrapper-info"]}>
          <div className={styles["detail-wrapper-user"]}>
            <Image src={profile} width="24" height="24" alt="프로필" />
            <span className={styles.name}>판다</span>
            <span className={styles.date}>2024</span>
          </div>

          <div className={styles["column-line"]}></div>

          <div className={styles["count-wrapper"]}>
            <Image src={heart} width="24" height="24" alt="하트" />
            <span className={styles["favorite-count"]}>
              2024
            </span>
          </div>
        </div>
        <div className={styles["row-line"]}></div>
        <span className={styles.content}>맥북</span>
      </section>
    </>
  );
}
