import getPosts from "@/lib/axios";
import { Article } from "@/types/articles";
import { useEffect, useState } from "react";
import styles from "./GeneralPostList.module.css";
import GeneralPost from "./General Post";

export default function GeneralPostList() {
  const SORT_OPTION = {
    RECENT: "recent",
    LIKE: "like",
  };

  const [posts, setPosts] = useState<Article[]>([]);
  const [sortOption, setSortOption] = useState(SORT_OPTION.RECENT);

  useEffect(() => {
    getGeneralPosts();
  }, [sortOption]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const getGeneralPosts = async () => {
    try {
      const { list } = await getPosts({
        page: 1,
        pageSize: 10,
        orderBy: sortOption,
      });
      setPosts(list);
    } catch (error) {
      console.log("Error General Posts", error);
    }
  };

  return (
    <>
      <div className={styles.GeneralBoardHeader}>
        <h2 className={styles["title-text"]}>게시글</h2>
        <button className={styles["small-button"]}>글쓰기</button>
      </div>
      <div className={styles.navBar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="검색할 내용을 입력해 주세요."
        />
        <select className={styles.dropDown} onChange={handleSortChange}>
          <option value="recent">최신순</option>
          <option value="like">좋아요순</option>
        </select>
      </div>
      <div className={styles.generalPostCards}>
        {posts.map((article) => (
          <GeneralPost key={article.id} {...article} />
        ))}
      </div>
    </>
  );
}
