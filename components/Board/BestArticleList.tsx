"use client";

import { useState, useEffect } from "react";
import { Article } from "../../types/article";
import { fetchArticles } from "@/api/articles";
import BestArticleCard from "./BestArticleCard";
import useResize from "@/hooks/useResize";

export default function BestArticleList() {
  const [posts, setPosts] = useState<Article[]>([]);
  const windowWidth = useResize();
  const [postNum, setPostNum] = useState(3);

  useEffect(() => {
    fetchBestPosts();
  }, []);

  const fetchBestPosts = async () => {
    try {
      const bestArticles = await fetchArticles(1, 3, "like");
      setPosts(bestArticles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (windowWidth <= 640) {
      setPostNum(1);
    } else if (windowWidth <= 1024) {
      setPostNum(2);
    } else {
      setPostNum(3);
    }
  }, [windowWidth]);

  return (
    <div className='max-w-[1200px] mx-auto py-6'>
      <h2 className='text-xl font-bold mb-6'>베스트 게시글</h2>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-4 '>
        {posts.slice(0, postNum).map((article) => (
          <BestArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}