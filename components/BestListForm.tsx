import Image from "next/image";
import styles from "./BestListForm.module.css";
import medalIcon from "../public/medal_icon.svg";
import heart from "../public/heart.svg";
import { useEffect, useState } from "react";
import { getArticles } from "../lib/api";
import {ArticleList} from "./type";

interface getBestArticleParams {
  pageSize: number;
  orderBy: "like" | "recent";
}

const PC_List = 3;
const TABLET_List = 2;
const MOBILE_List = 1;

export default function BestListForm() {
  const [orderBy, setOrderBy] = useState<"like" | "recent">("like");
  const [isLike, setIsLike] = useState<ArticleList>({ list: [] });
  const [pageSize, setPageSize] = useState<number>(PC_List);

  async function getBestArticle({ pageSize, orderBy }: getBestArticleParams) {
    try {
      const response = await getArticles({ pageSize, orderBy });
      setIsLike(response);
    } catch (error) {
      console.log(error);
    }
  }
  const changePageSize = () => {
    if (window.innerWidth >= 1200) {
      setPageSize(PC_List);
      console.log(pageSize);
      return;
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
      setPageSize(TABLET_List);
      return;
    }
    if (window.innerWidth >= 375 && window.innerWidth <= 767) {
      setPageSize(MOBILE_List);
      return;
    }
  };

  useEffect(() => {
    getBestArticle({ pageSize, orderBy });
  }, [pageSize, orderBy]);

  useEffect(() => {
    changePageSize();
    window.addEventListener("resize", changePageSize);
    return () => window.removeEventListener("resize", changePageSize);
  }, []);
  
  return (
    <>
      {isLike.list.length > 0 ? (
        isLike.list.map((article) => (
          <form key={article.id} className={styles["BestList-form"]}>
            <div className={styles["BestList-badge"]}>
              <div className={styles["BestList-wrapper-badge"]}>
                <Image src={medalIcon} alt="메달" width="16" height="16" />
                <span className={styles["BestList-badge-best"]}>Best</span>
              </div>
            </div>

            <div className={styles["BestList-wrapper-h3"]}>
              <h3 className={styles["BestList-h3"]}>{article.title}</h3>
              {article.image && (
                <div className={styles["BestList-img"]}>
                  <Image
                    src={article.image}
                    alt="이미지"
                    width="48"
                    height="45"
                  />
                </div>
              )}
            </div>

            <div className={styles["BestList-wrapper"]}>
              <div className={styles["BestList-wrapper-name"]}>
                <span className={`${styles["BestList-span"]} ${styles.name}`}>
                  {article.writer.nickname}
                </span>
                <div className={styles["BestList-wrapper-heart"]}>
                  <Image src={heart} alt="하트" width="16" height="16" />
                  <span
                    className={`${styles["BestList-span"]} ${styles.favoriteCount}`}
                  >
                    {article.likeCount}
                  </span>
                </div>
              </div>
              <span className={`${styles["BestList-span"]} ${styles.date}`}>
                {new Date(article.createdAt).toLocaleDateString()}
              </span>
            </div>
          </form>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
