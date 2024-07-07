"use client";

import { useState, useEffect } from "react";
import { Article } from "../../types/articleTypes";
import Image from "next/legacy/image";
import BestBadge from "@/public/images/icons/img_badge.svg";
import { fetchArticles } from "@/app/api/articles";

export default function PrintBestArticles() {
  const [posts, setPosts] = useState<Article[]>([]);

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

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-xl font-bold mb-4'>베스트 게시글</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {posts.map((article) => (
          <div
            key={article.id}
            className='max-w-sm rounded-lg overflow-hidden bg-gray-50'
          >
            <div className='px-6 pb-4'>
              <div className='mb-4'>
                <Image src={BestBadge} alt='best badge' width={102} />
              </div>
              <div className='flex' style={{ height: "72px" }}>
                <div className='font-semibold text-xl text-gray-800'>
                  {article.title}
                </div>
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
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex text-gray-600 font-normal'>
                  {article.writer.nickname} ♥ {article.likeCount}
                </div>
                <div className='text-gray-600 text-sm'>
                  {new Date(article.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
