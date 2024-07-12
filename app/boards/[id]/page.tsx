"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchArticleById } from "@/api/articles";
import { Article } from "@/types/article";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchArticle();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      const data = await fetchArticleById(Number(id));
      setArticle(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className='max-w-[1200px] mx-auto py-4'>
      <h1 className='text-2xl font-bold mb-4'>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
