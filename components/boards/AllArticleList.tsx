import { useState } from "react";
import styles from "./Freeboard.module.scss";
import AllArticleItem from "./AllArticleItem";
import { Article } from "@/types/ArticleTypes";
import SearchInput from "@/components/layout/SearchInput";
import Button from "@/components/layout/Button";
import Dropdown from "@/components/layout/Dropdown";

export default function AllArticleList({
  initialArticles,
}: {
  initialArticles: Article[];
}) {
  const [articles, setArticles] = useState(initialArticles);

  return (
    <section className={styles["all-article"]}>
      <div className={styles["all-title-wrapper"]}>
        <h1 className={styles.title}>게시글</h1>
        <Button>글쓰기</Button>
      </div>
      <div className={styles["search-wrapper"]}>
        <SearchInput />
        <Dropdown />
      </div>
      {articles.map((article) => (
        <AllArticleItem key={article.id} article={article} />
      ))}
    </section>
  );
}
