"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Article } from "../../types/article";
import { fetchArticles } from "@/api/articles";
import searchIcon from "@/assets/images/icons/ic_search.svg";
import Button from "../Button";
import AllArticleCard from "./AllArticleCard";
import OrderDropdown from "../OrderDropdown";
import Link from "next/link";

const sortOptions = [
  { value: "recent", label: "최신순" },
  { value: "like", label: "좋아요순" },
];

export default function AllArticleList() {
  const [posts, setPosts] = useState<Article[]>([]);
  const [sortType, setSortType] = useState("recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    loadArticles();
  }, [sortType, page]);

  const loadArticles = async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const newArticles = await fetchArticles(page, 10, sortType);
      if (newArticles.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...newArticles]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (value: string) => {
    setSortType(value);
    setPage(1);
    setPosts([]);
    setHasMore(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) => post.title.includes(searchTerm));

  const lastPostElementCallback = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <div className='max-w-[1200px] mx-auto py-4'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold'>게시글</h2>
        <Link href='/addboard'>
          <Button text='글쓰기' color='default' size='small' width='88px' />
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='검색할 내용을 입력해주세요'
          className='sm:mr-4 mr-2 py-[9px] pl-12 pr-5 rounded-xl bg-gray-100 w-full'
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
      <div>
        {filteredPosts.map((article, index) => {
          if (index === filteredPosts.length - 1) {
            return (
              <div ref={lastPostElementCallback} key={article.id}>
                <AllArticleCard {...article} />
              </div>
            );
          } else {
            return <AllArticleCard key={article.id} {...article} />;
          }
        })}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p className='text-center py-4'>게시글의 마지막입니다</p>}
    </div>
  );
}
