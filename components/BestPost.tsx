import styles from "@/components/BestPost.module.css";
import Image from "next/image";
import best_img from "@/public/img_badge.svg";
import heart_ic from "@/public/ic_heart.svg";

export default function BestPost() {
  return (
    <div className={styles.container}>
      <Image
        src={best_img}
        alt="판다마켓로고"
        width="102"
        height="30"
        className={styles["badge-img"]}
      />
      <div className={styles["description-wrap"]}>
        <div className={styles.description}>
          우아하아하아우아하아하아우아하아하아우아하아하아우아하아하아우아하아하아
        </div>
        <Image
          src={best_img}
          alt="게시글이미지"
          width="72"
          height="72"
          className={styles["post-img"]}
        />
      </div>
      <div className={styles["bottom-wrap"]}>
        <div className={styles["nickname-wrap"]}>
          <div className={styles.nickname}>총명한판다</div>
          <div className={styles["favorite-wrap"]}>
            <button
              type="button"
              title="좋아요버튼"
              className={styles["favorite-btn"]}
            >
              <Image
                src={heart_ic}
                alt="좋아요아이콘"
                width="16"
                height="16"
                className={styles["favorite-img"]}
              />
            </button>
            <span className={styles["favorite-count"]}>10</span>
          </div>
        </div>
        <div className={styles.date}>2024. 04. 16</div>
      </div>
    </div>
  );
}
