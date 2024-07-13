import { useEffect, useState } from "react";
import styles from "../Freeboard.module.scss";
import BestArticleItem from "./BestArticleItem";
import { getArticle } from "@/lib/articleApi";
import { Article, ArticleApiData } from "@/types/ArticleTypes";
import Link from "next/link";

const PAGESIZE = 3;
const ORDERBY = "like";

export default function BestArticleList() {
  const [article, setArticle] = useState<Article[]>([]);

  const fetchData = async ({ orderBy, pageSize }: ArticleApiData) => {
    try {
      const result = await getArticle({ orderBy, pageSize });

      setArticle(() => result.list);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(article);

  useEffect(() => {
    fetchData({ orderBy: ORDERBY, pageSize: PAGESIZE });
  }, []);

  return (
    <section className={styles["best-article"]}>
      <h1 className={styles.title}>베스트 게시글</h1>
      <div className={styles["card-container"]}>
        {article.map((article) => (
          <Link href="" key={article.id}>
            <BestArticleItem article={article} />
          </Link>
        ))}
      </div>
    </section>
  );
}
