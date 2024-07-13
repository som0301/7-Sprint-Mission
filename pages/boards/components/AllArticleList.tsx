import { useEffect, useState } from "react";
import styles from "../Freeboard.module.scss";
import AllArticleItem from "./AllArticleItem";
import { Article, ArticleApiData } from "@/types/ArticleTypes";
import { getArticle } from "@/lib/articleApi";
import SearchInput from "@/components/layout/SearchInput";
import Button from "@/components/layout/Button";
import Dropdown from "@/components/layout/Dropdown";

const PAGESIZE = 10;
const ORDERBY = "recent";

export default function AllArticleList() {
  const [article, setArticle] = useState<Article[]>([]);

  const fetchData = async ({ orderBy, pageSize }: ArticleApiData) => {
    try {
      const result = await getArticle({ orderBy, pageSize });

      setArticle(() => result.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData({ orderBy: ORDERBY, pageSize: PAGESIZE });
  }, []);

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
      {article.map((article) => (
        <AllArticleItem key={article.id} article={article} />
      ))}
    </section>
  );
}
