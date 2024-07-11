import styles from "./ListForm.module.css";
import heart from "../public/heart.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getArticles } from "../lib/api";
import userBtn from "../public/userBtn.svg";
import { Article } from "./type";

interface Props {
  pageSize: number;
  orderBy: string;
  keyword: string;
}

export default function ListForm({ pageSize, orderBy, keyword }: Props) {
  const [isList, setIsList] = useState<Article[]>([]);

  async function getListArticle({ pageSize, orderBy, keyword }: Props) {
    try {
      const reponse = await getArticles({ pageSize, orderBy, keyword });
      setIsList(reponse.list);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListArticle({ pageSize, orderBy, keyword });
  }, [pageSize, orderBy, keyword]);

  return (
    <>
      {isList.length > 0 ? (
        isList.map((article) => (
          <>
            <form key={article.id} className={styles["List-form"]}>
              <div className={styles["List-wrapper-title"]}>
                <span className={styles["List-title"]}>{article.title}</span>
                {article.image && (
                  <div className={styles["List-wrapper-img"]}>
                    <div className={styles["List-img"]}>
                      <Image
                        src={article.image}
                        alt="이미지"
                        width="48"
                        height="45"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className={styles["List-wrapper"]}>
                <div className={styles["List-wrapper-name"]}>
                  <Image src={userBtn} alt="사용자" width="24" height="24" />
                  <span className={`${styles["List-span"]} ${styles.name}`}>
                    {article.writer.nickname}
                  </span>
                  <span className={`${styles["List-span"]} ${styles.date}`}>
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className={styles["List-wrapper-heart"]}>
                  <Image src={heart} alt="하트" width="24" height="24" />
                  <span
                    className={`${styles["List-span"]} ${styles.favoriteCount}`}
                  >
                    {article.likeCount}
                  </span>
                </div>
              </div>
            </form>
            <div className={styles.line}></div>
          </>
        ))
      ) : (
        <div>loading</div>
      )}
    </>
  );
}
