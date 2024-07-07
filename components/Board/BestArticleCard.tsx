import React from "react";
import Image from "next/legacy/image";
import { Article } from "../../types/article";
import BestBadge from "@/public/images/icons/img_badge.svg";
import Heart from "@/public/images/icons/ic_heart.svg";

const BestArticleCard: React.FC<Article> = ({
  title,
  image,
  likeCount,
  createdAt,
  writer,
}) => {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden bg-gray-50 flex flex-col justify-between'>
      <div className='px-6 pb-4 flex-grow'>
        <div className='mb-4'>
          <Image src={BestBadge} alt='best badge' width={102} />
        </div>
        <div className='flex justify-between items-center mb-4'>
          <div className='font-semibold text-xl text-gray-800 leading-6 flex-grow'>
            {title}
          </div>
          {image && (
            <div className='w-18 h-18 bg-white flex items-center justify-center ml-2 p-3 border border-gray-200 rounded-md'>
              <div className='relative w-12 h-12 p-3'>
                <Image
                  src={image}
                  alt='article-image'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='px-6 pb-4 mt-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex font-normal text-sm'>
            <div className='text-gray-600 mr-2'>{writer.nickname}</div>
            <Image
              src={Heart}
              alt='heart'
              width={14}
              className='text-gray-500'
            />
            <div className='text-gray-500 ml-0.5'>{likeCount}</div>
          </div>
          <div className='text-gray-400 font-normal text-sm'>
            {new Date(createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestArticleCard;
