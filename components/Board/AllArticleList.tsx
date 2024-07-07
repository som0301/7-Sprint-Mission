"use client";

import { useState, useEffect } from "react";
import { Article } from "../../types/article";
import Image from "next/legacy/image";
import { fetchArticles } from "@/api/articles";

export default function AllArticleList() {
  const [posts, setPosts] = useState<Article[]>([]);
  const [sortType, setSortType] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadArticles();
  }, [sortType]);

  const loadArticles = async () => {
    try {
      const articles = await fetchArticles(1, 10, sortType);
      setPosts(articles);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) => post.title.includes(searchTerm));

  return (
    <div className='max-w-[1200px] mx-auto p-4'>
      <h2 className='text-xl font-bold mb-4'>게시글</h2>
      <div className='mb-4 flex items-center justify-between'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='검색할 내용을 입력해주세요'
          className='border p-2 rounded-xl bg-gray-100 w-full mr-4'
        />
        <select
          value={sortType}
          onChange={handleSortChange}
          className='border p-2 rounded-xl'
        >
          <option value='recent'>최신순</option>
          <option value='like'>좋아요순</option>
        </select>
      </div>
      <div className='divide-y divide-gray-200'>
        {filteredPosts.map((article) => (
          <div key={article.id} className='p-4 flex items-start'>
            <div className='flex-grow'>
              <h2 className='text-xl font-semibold text-gray-800'>
                {article.title}
              </h2>
              <p className='text-gray-500'>{article.content}</p>
              <div className='text-gray-400 text-sm mt-2'>
                {article.writer.nickname}{" "}
                {new Date(article.createdAt).toLocaleDateString()}
              </div>
            </div>
            <div className='ml-4 flex-shrink-0'>
              {article.image && (
                <div className='mt-4'>
                  <Image
                    src={article.image}
                    alt='article-image'
                    width={72}
                    height={72}
                  />
                </div>
              )}
              <div className='text-gray-500 text-center mt-2'>
                ♥ {article.likeCount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
