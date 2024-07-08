import React from "react";
import Image from "next/image";
import { Article } from "../../types/article";
import Profile from "@/public/images/icons/ic_profile.svg";
import Heart from "@/public/images/icons/ic_heart.svg";

const AllArticleCard: React.FC<Article> = ({
  title,
  content,
  createdAt,
  writer,
  image,
  likeCount,
}) => {
  return (
    <div
      className='py-6 flex items-start relative'
      style={{ paddingBottom: "72px" }}
    >
      <div className='flex-grow'>
        <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
        <p className='text-gray-500'>{content}</p>
      </div>
      <div className='ml-4 flex-shrink-0'>
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
      <div className='absolute bottom-6 left-0 right-0 flex justify-between font-normal'>
        <div className='text-gray-400 text-sm flex items-center'>
          <Image src={Profile} alt='profile' width={24} />
          <span className='ml-2 text-gray-600'>{writer.nickname}</span>
          <span className='ml-2'>
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className='text-gray-500 flex items-center'>
          <Image src={Heart} alt='heart' width={14} />
          <span className='ml-1'>{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default AllArticleCard;
