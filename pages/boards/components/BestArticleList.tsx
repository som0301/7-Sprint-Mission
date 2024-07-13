import { useEffect, useState } from "react";
import styles from "../Freeboard.module.scss";
import BestArticleItem from "./BestArticleItem";
import { getArticle } from "@/lib/articleApi";
import { Post, PostApiData } from "@/types/postTypes";

export default function BestArticleList() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async ({ orderBy, pageSize }: PostApiData) => {
    try {
      const test = await getArticle({ orderBy, pageSize });

      setPosts(() => test.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData({ orderBy: "like", pageSize: 3 });
  }, []);

  return (
    <section className={styles["best-posts"]}>
      <h1 className={styles.title}>베스트 게시글</h1>
      {posts.map((post) => (
        <BestArticleItem key={post.id} post={post} />
      ))}
    </section>
  );
}
