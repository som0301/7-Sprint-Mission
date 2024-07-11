import Image from "next/image";
import styles from "@/components/GeneralPost.module.css";
import heart_ic from "@/public/ic_heart.svg";
import profile_ic from "@/public/ic_profile.svg";
import { PostProps } from "@/lib/type";

export default function GeneralPost({ article, ...rest }: PostProps) {
  return (
    <div className={styles.container} {...rest}>
      <div className={styles["top-wrap"]}>
        <div className={styles.title}>{article.title}</div>
        {article.image && (
          <Image
            src={article.image}
            alt="게시글이미지"
            width="72"
            height="72"
            className={styles["post-img"]}
          />
        )}
      </div>
      <div className={styles["bottom-wrap"]}>
        <div className={styles["profile-wrap"]}>
          <Image
            src={profile_ic}
            alt="프로필이미지"
            width="24"
            height="24"
            className={styles["profile-img"]}
          />
          <div className={styles.nickname}>{article.writer.nickname}</div>
          <div className={styles.date}>
            {article.updatedAt.replace(/-/g, ".").split("T")[0]}
          </div>
        </div>
        <div className={styles["favorite-wrap"]}>
          <Image
            src={heart_ic}
            alt="좋아요이미지"
            width="24"
            height="24"
            className={styles["favorite-img"]}
          />
          <div className={styles["favorite-count"]}>{article.likeCount}</div>
        </div>
      </div>
    </div>
  );
}
