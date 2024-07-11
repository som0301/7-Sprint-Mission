import Image from "next/image";
import styles from "@/components/GeneralPost.module.css";
import heart_ic from "@/public/ic_heart.svg";
import logo from "@/public/logo.svg"; // 삭제

export default function GeneralPost() {
  return (
    <div className={styles.container}>
      <div className={styles["top-wrap"]}>
        <div className={styles.description}>
          안녕하시오들 나는 이세상 최고의 원펀치쓰리강냉이라네
        </div>
        <Image
          src={logo}
          alt="게시글이미지"
          width="72"
          height="72"
          className={styles["post-img"]}
        />
      </div>
      <div className={styles["bottom-wrap"]}>
        <div className={styles["profile-wrap"]}>
          <Image
            src={logo}
            alt="프로필이미지"
            width="24"
            height="24"
            className={styles["profile-img"]}
          />
          <div className={styles.nickname}>든든한찬찬</div>
          <div className={styles.date}>2020. 01. 02</div>
        </div>
        <div className={styles["favorite-wrap"]}>
          <Image
            src={heart_ic}
            alt="좋아요이미지"
            width="24"
            height="24"
            className={styles["favorite-img"]}
          />
          <div className={styles["favorite-count"]}>9999</div>
        </div>
      </div>
    </div>
  );
}
