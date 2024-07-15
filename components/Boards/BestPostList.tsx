import { Article } from "@/types/articles";
import { useState, useEffect } from "react";
import getPosts from "../../lib/axios";
import BestPost from "./BestBoard";

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
    <div className="best-post">
      <h2 className="title-text">베스트 게시글</h2>
      <div className="post-card">
        {posts.map((article) => (
          <BestPost key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}
