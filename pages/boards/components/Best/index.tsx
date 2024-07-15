import { useEffect, useState } from "react";
import BestPost from "./BestPost";
import styles from "./styles.module.scss";
import { getArticles, Article } from "@/pages/api/articles";
import debounce from "lodash-es/debounce";

function Best() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageSize, setPageSize] = useState(3);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const params = {
          page: 1,
          pageSize: pageSize,
          orderBy: "like",
          keyword: "",
        };
        const { list } = await getArticles(params);
        setArticles(list);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다..!", error);
      }
    }

    fetchArticles();
  }, [pageSize]);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth >= 1200) {
        setPageSize(3);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
        setPageSize(2);
      } else if (window.innerWidth <= 767) {
        setPageSize(1);
      }
    }, 100);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles["container"]}>
      <label className={styles["title"]}>베스트 게시글</label>
      <div className={styles["best-post-wrapper"]}>
        {articles.slice(0, pageSize).map((article) => (
          <BestPost key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Best;
