import { useEffect, useState } from "react";
import styles from "./Freeboard.module.scss";
import AllArticleItem from "./AllArticleItem";
import { Article, ArticleApiData } from "@/types/articleTypes";
import SearchInput from "@/components/layout/SearchInput";
import Button from "@/components/layout/Button";
import Dropdown from "@/components/layout/Dropdown";
import Link from "next/link";
import { getArticle } from "@/lib/articleApi";

export default function AllArticleList({
  initialArticles,
}: {
  initialArticles: Article[];
}) {
  const [articles, setArticles] = useState(initialArticles);
  const [orderBy, setOrderBy] = useState<ArticleApiData["orderBy"]>("recent");

  const handleOrderChange = (option: string) => {
    if (option === "recent" || option === "like") setOrderBy(option);
  };

  const fetchData = async ({ orderBy, pageSize }: ArticleApiData) => {
    try {
      const result = await getArticle({ orderBy, pageSize });

      setArticles(() => result.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData({ orderBy: orderBy });
  }, [orderBy]);

  return (
    <section className={styles["all-article"]}>
      <div className={styles["all-title-wrapper"]}>
        <h1 className={styles.title}>게시글</h1>
        <Button>글쓰기</Button>
      </div>
      <div className={styles["search-wrapper"]}>
        <SearchInput />
        <Dropdown onOrderChange={handleOrderChange} />
      </div>
      {articles.map((article) => (
        <Link href={`/board/${article.id}`} key={article.id}>
          <AllArticleItem article={article} />
        </Link>
      ))}
    </section>
  );
}
