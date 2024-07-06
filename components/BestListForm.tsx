import Image from "next/image";
import styles from "./BestListForm.module.css";
import medalIcon from "../public/medal_icon.svg";
import heart from "../public/heart.svg";
import axios from "../lib/axios";
import { useEffect, useState } from "react";

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

export default function BestListForm(props: ArticleList) {
  const [isLike, setIsLike] = useState<ArticleList>({ list: [] });

  async function getProduct() {
    try {
      const res = await axios.get("/articles?page=1&pageSize=3&orderBy=like");
      const likeProduct = res.data;
      setIsLike(likeProduct);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  console.log(isLike);

  return (
    <>
      {isLike.list.length > 0 ? (
        isLike.list.map((article, index) => (
          <form key={index} className={styles["BestList-form"]}>
            <div className={styles["BestList-badge"]}>
              <div className={styles["BestList-wrapper-badge"]}>
                <Image src={medalIcon} alt="메달" width="16" height="16" />
                <span className={styles["BestList-badge-best"]}>Best</span>
              </div>
            </div>

            <div className={styles["BestList-wrapper-h3"]}>
              <h3 className={styles["BestList-h3"]}>{article.title}</h3>
              {article.image ? (
                <div className={styles["BestList-img"]}>
                  <Image
                    src={article.image}
                    alt="하트"
                    width="48"
                    height="45"
                  />
                </div>
              ) : (
                ""
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
