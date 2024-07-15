import Image from "next/image";
import Dropdown from "./Dropdown";
import styles from "./styles.module.scss";
import searchIcon from "@/assets/icons/ic_search.svg";
import AllPost from "./AllPost";
import { useEffect, useState } from "react";
import { getArticles, Article } from "@/pages/api/articles";

function All() {
  const options = ["최신순", "좋아요순"];
  const [articles, setArticles] = useState<Article[]>([]);
  const [orderBy, setOrderBy] = useState<"recent" | "like">("recent");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      try {
        const { list } = await getArticles({ orderBy });
        setArticles(list);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다..!", error);
      }
    }

    fetchArticles();
  }, [orderBy]);

  const handleSortChange = (option: string) => {
    if (option === "최신순") {
      setOrderBy("recent");
    } else if (option === "좋아요순") {
      setOrderBy("like");
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.includes(search)
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["all-post-top-header"]}>
        <label className={styles["title"]}>게시글</label>
        <button className={styles["button"]}>글쓰기</button>
      </div>
      <div className={styles["all-post-bottom-header"]}>
        <div className={styles["search-container"]}>
          <Image
            src={searchIcon}
            alt="검색"
            className={styles["search-icon"]}
            width={24}
            height={24}
          />
          <input
            type="search"
            className={styles["search"]}
            placeholder="검색할 키워드를 입력해주세요"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <Dropdown
          options={options}
          defaultOption="최신순"
          onChange={handleSortChange}
        />
      </div>
      {filteredArticles.map((article) => (
        <AllPost key={article.id} article={article} />
      ))}
    </div>
  );
}

export default All;
