"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import debounce from "lodash/debounce";
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
  const [articles, setArticles] = useState<Article[]>([]);
  const [sortType, setSortType] = useState("recent");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
    loadArticles();
  }, [sortType, search]);

  useEffect(() => {
    if (page > 1) loadArticles();
  }, [page]);

  const loadArticles = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newArticles = await fetchArticles(page, 10, sortType);
      if (newArticles.length === 0) {
        setHasMore(false);
      } else {
        setArticles((prevArticles) => [...prevArticles, ...newArticles]);
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
    setArticles([]);
    setHasMore(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase()),
  );

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
          value={search}
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
        {filteredArticles.map((article, index) => {
          if (index === filteredArticles.length - 1) {
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
      {!hasMore && filteredArticles.length === 0 && (
        <p className='text-center py-4'>검색 결과가 없습니다</p>
      )}
      {!hasMore && filteredArticles.length > 0 && (
        <p className='text-center py-4'>게시글의 마지막입니다</p>
      )}
    </div>
  );
}
