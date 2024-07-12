import Image from "next/image";
import styles from "./BoardDetail.module.css";
import kebab from "../public/kebab.svg";
import profile from "../public/profile.svg";

export default function BoardCommentList() {
  return (
    <>
      <section className={styles["comment-list"]}>
        <div className={styles["comment-list-wrapper"]}>
          <span className={styles["list-title"]}>혹시</span>
          <div className={styles["img-wrapper"]}>
            <Image src={profile} width="32" height="32" alt="프로필" />
            <div className={styles["user-wrapper"]}>
              <span className={`${styles["list-span"]} $styles["list-name"]}`}>상큼</span>
              <span className={`${styles["list-span"]} {styles["list-date"]}`}>1시간</span>
            </div>
          </div>
        </div>
        <Image src={kebab} width="24" height="24" alt="더보기" />
      </section>
      <div className={styles["list-line"]}></div>
    </>
  );
}
