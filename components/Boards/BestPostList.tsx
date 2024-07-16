import { Article } from "@/types/articles";
import { useState, useEffect } from "react";
import getPosts from "../../lib/axios";
import BestPost from "./BestBoard";
import styles from "./BestPostList.module.css";

export default function BestPostList() {
  const [posts, SetPosts] = useState<Article[]>([]);

  useEffect(() => {
    getBestPosts();
  }, []);

  const getBestPosts = async () => {
    try {
      const { list } = await getPosts({
        page: 1,
        pageSize: 3,
        orderBy: "like",
      });
      SetPosts(list);
    } catch (error) {
      console.log("Error Best Posts :)", error);
    }
  };

  return (
    <>
      <h2 className={styles["title-text"]}>베스트 게시글</h2>
      <div className={styles["post-cards"]}>
        {posts.map((article) => (
          <BestPost key={article.id} {...article} />
        ))}
      </div>
    </>
  );
}
