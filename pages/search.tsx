import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import axios from "../lib/axios";
import { useRouter } from "next/router";

interface Article {
  content: string;
  createdAt: string;
  id: number;
  image: string | null;
  likeCount: number;
  title: string;
  writer: { id: number; nickname: string };
}
export default function Search() {
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();
  const {q} = router.query;

  async function getArticles(keyword: string) {
    try {
      const res = await axios.get(`/articles?keyword=${keyword}`);
      const nextArticles = res.data.results ?? [];
      console.log(nextArticles);
      setArticles(nextArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }
  useEffect(() => {
    if (q) {
      getArticles(q as string);
      console.log(q);
    }
  }, [q]);

  return (
    <>
      <h2>{q} 결과 </h2>
      <SearchForm initialValue={q as string} />
      {articles && articles.length > 0 ? (
        articles.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>By: {article.writer.nickname}</p>
            <p>Likes: {article.likeCount}</p>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </>
  );
}
