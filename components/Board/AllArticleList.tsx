"use client";

import { useState, useEffect } from "react";
import { Article } from "../../types/article";
import { fetchArticles } from "@/api/articles";
import searchIcon from "@/assets/images/icons/ic_search.svg";
import Button from "../Button";
import AllArticleCard from "./AllArticleCard";
import OrderDropdown from "../OrderDropdown";

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "like", label: "좋아요순" },
];

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

  const handleSortChange = (value: string) => {
    setSortType(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) => post.title.includes(searchTerm));

  return (
    <div className='max-w-[1200px] mx-auto p-4'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold'>게시글</h2>
        <Button text='글쓰기' color='default' size='small' width='88px' />
      </div>
      <div className='mb-6 flex items-center justify-between'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='검색할 내용을 입력해주세요'
          className='mr-4 py-[9px] pl-12 pr-5 rounded-xl bg-gray-100 w-full'
          style={{
            backgroundImage: `url(${searchIcon.src})`,
            backgroundSize: "24px 24px",
            backgroundPosition: "16px center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <OrderDropdown
          options={sortOptions}
          selected={sortType}
          onSelect={handleSortChange}
        />
      </div>
      <div className='divide-y divide-gray-200'>
        {filteredPosts.map((article) => (
          <AllArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}
