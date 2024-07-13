"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { fetchArticleById } from "@/api/articles";
import { Article } from "@/types/article";
import Profile from "@/assets/images/icons/ic_profile.svg";
import Heart from "@/assets/images/icons/ic_heart.svg";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article>();

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
    }
  };

  if (!article) return null;

  return (
    <div className='max-w-[1200px] mx-auto py-4 px-6 bg-white'>
      <Suspense fallback={<p>Loading...</p>}>
        <h1 className='text-2xl font-bold mb-2'>{article.title}</h1>
        <div className='flex items-center mb-4 text-gray-500'>
          <div className='mr-2'>
            <Image
              src={Profile}
              alt='profile'
              className='inline-block w-6 h-6'
            />
          </div>
          <span className='mr-2'>{article.writer.nickname}</span>
          <span className='mr-2'>
            {new Date(article.createdAt).toLocaleDateString()}
          </span>
          <span className='flex items-center'>
            <Image
              src={Heart}
              alt='likes'
              className='inline-block w-4 h-4 mr-1'
            />
            {article.likeCount}
          </span>
        </div>
        <div className='mb-6'>{article.content}</div>
        <div className='pt-4'>
          <h2 className='text-lg font-semibold mb-4'>댓글 달기</h2>
          <textarea
            className='w-full p-4 border rounded-lg mb-4'
            placeholder='댓글을 입력해주세요.'
          />
        </div>
      </Suspense>
    </div>
  );
}
