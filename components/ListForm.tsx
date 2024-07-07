import styles from "./ListForm.module.css";
import heart from "../public/heart.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getArticles } from "../lib/api";
import userBtn from "../public/userBtn.svg";

interface ListProps {
  pageSize: number;
  orderBy: string;
}
interface Writer {
  id: number;
  nickname: string;
}
interface Article {
  content: string;
  createdAt: string;
  id: number;
  image: string | null;
  likeCount: number;
  title: string;
  writer: Writer;
}
interface ArticleList {
  list: Article[];
}

export default function ListForm({ pageSize, orderBy }: ListProps) {
  const [isList, setIsList] = useState<ArticleList>({ list: [] });

  async function getListArticle({ pageSize, orderBy }: ListProps) {
    try {
      const reponse = await getArticles({ pageSize, orderBy });
      setIsList(reponse);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListArticle({ pageSize, orderBy });
  }, [pageSize, orderBy]);

  return (
    <>
      {isList.list.length > 0 ? (
        isList.list.map((article, index) => (
          <>
            <form key={index} className={styles["List-form"]}>
              <div className={styles["List-wrapper-title"]}>
                <span className={styles["List-title"]}>{article.title}</span>
                {article.image ? (
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
                ) : (
                  ""
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
