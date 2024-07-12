import Image from "next/image";
import styles from "./BoardDetail.module.css";
import profile from "../public/profile.svg";
import heart from "../public/heart.svg";
import { Article } from "./type";

interface Props {
  article: Article | null;
}

export default function BoardDetailInfo({ article }: Props) {
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className={styles["detail-wrapper"]}>
        <h1 className={styles.h1}>{article.title}</h1>
        <div className={styles["detail-wrapper-info"]}>
          <div className={styles["detail-wrapper-user"]}>
            {article.image ? (
              <Image src={article.image} width="24" height="24" alt="프로필" />
            ) : (
              <Image src={profile} width="24" height="24" alt="프로필" />
            )}
            <span className={styles.name}>{article.writer.nickname}</span>
            <span className={styles.date}>
              {new Date(article.createdAt).toLocaleDateString()}
            </span>
          </div>

          <div className={styles["column-line"]}></div>

          <div className={styles["count-wrapper"]}>
            <Image src={heart} width="24" height="24" alt="하트" />
            <span className={styles["favorite-count"]}>
              {article.likeCount}
            </span>
          </div>
        </div>
        <div className={styles["row-line"]}></div>
        <span className={styles.content}>{article.content}</span>
      </section>
    </>
  );
}
