import getPosts from "@/lib/axios";
import { Article } from "@/types/articles";
import { useEffect, useState } from "react";
import styles from "./GeneralPostList.module.css";
import GeneralPost from "./General Post";

export default function GeneralPostList() {
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    getGeneralPosts();
  }, []);

  const getGeneralPosts = async () => {
    try {
      const { list } = await getPosts({
        page: 1,
        pageSize: 10,
        orderBy: "like",
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
        <select className={styles.dropDown}>
          <option value="like">좋아요순</option>
          <option value="recent">최신순</option>
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
