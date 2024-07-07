import React from "react";
import Image from "next/legacy/image";
import { Article } from "../../types/articleTypes";
import BestBadge from "public/images/icons/img_badge.svg";

const BestArticleCard: React.FC<Article> = ({
  title,
  image,
  likeCount,
  createdAt,
  writer,
}) => {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden bg-gray-50'>
      <div className='px-6 pb-4'>
        <div className='mb-4'>
          <Image src={BestBadge} alt='best badge' width={102} />
        </div>
        <div className='font-semibold text-xl text-gray-800'>{title}</div>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <div className='flex items-center justify-between mt-2'>
          <div className='flex items-center'>
            <span>♥ {likeCount}</span>
          </div>
          <div className='text-gray-600 text-sm'>
            {new Date(createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestArticleCard;
