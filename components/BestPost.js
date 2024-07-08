import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import Image from 'next/image';
import styles from '@/components/BestPost.module.css';

export default function BestPost() {
  const [list, setList] = useState([]);
  const [pageSize, setPageSize] = useState(3);

  async function getList() {
    try {
      let newPageSize = 3;

      if (window.innerWidth <= 1280) {
        newPageSize = 2;
      }
      if (window.innerWidth <= 744) {
        newPageSize = 1;
      }

      setPageSize(newPageSize);

      const res = await axios.get(
        `articles?page=1&pageSize=${newPageSize}&orderBy=like`
      );
      console.log(res.data);
      setList(res.data.list);
    } catch (error) {
      console.error('Failed to fetch list:', error);
    }
  }

  useEffect(() => {
    getList();
    window.addEventListener('resize', getList);
    return () => {
      window.removeEventListener('resize', getList);
    };
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString)
      .toLocaleDateString('ko-KR', options)
      .replace(/\./g, '.');
  };

  return (
    <div className={styles.bestPostContainer}>
      <span className={styles.postSubject}>베스트 게시글</span>
      <div className={styles.postWrapper}>
        {list.map((post) => (
          <div key={post.id} className={styles.postContentWrapper}>
            <div className={styles.postContent}>
              <Image
                src='/image/bestPostImg.png'
                alt='Best Post'
                width={50}
                height={50}
              />
              <div className={styles.postInfo}>
                <span className={styles.postTitle}>{post.title}</span>
                <div
                  className={`${styles.postImgContainer} ${
                    post.image ? styles.withImage : ''
                  }`}
                >
                  {post.image && (
                    <img
                      className={styles.postImg}
                      src={post.image}
                      alt='bestPost Image'
                    />
                  )}
                </div>
              </div>
              <div className={styles.postDetails}>
                <div className={styles.postMeta}>
                  <span className={styles.nickname}>
                    {post.writer.nickname}
                  </span>
                  <div className={styles.likeCount}>
                    <img src='/image/likeIcon.svg' />
                    <div>{post.likeCount}</div>
                  </div>
                </div>
                <span className={styles.createdAt}>
                  {formatDate(post.createdAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
