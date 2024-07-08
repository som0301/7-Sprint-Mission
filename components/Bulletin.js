import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import Image from 'next/image';
import styles from '@/components/Bulletin.module.css';
import Dropdown from './Dropdown';
import SearchForm from './SearchForm';

export default function Bulletin() {
  const [list, setList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('최신순');

  async function getList(orderBy) {
    try {
      const res = await axios.get(
        `articles?page=1&pageSize=3&orderBy=${orderBy}`
      );
      console.log(res.data);
      setList(res.data.list);
    } catch (error) {
      console.error('Failed to fetch list:', error);
    }
  }

  useEffect(() => {
    const orderBy = selectedOption === '최신순' ? 'recent' : 'like';
    getList(orderBy);
  }, [selectedOption]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString)
      .toLocaleDateString('ko-KR', options)
      .replace(/\./g, '.');
  };

  return (
    <div className={styles.bulletinContainer}>
      <div className={styles.bulletinHeader}>
        <span className={styles.postSubject}>게시글</span>
        <button className={styles.writingBtn}>글쓰기</button>
      </div>
      <div className={styles.searchSortGroup}>
        <SearchForm />
        <Dropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className={styles.postContainer}>
        {list.map((post) => (
          <div className={styles.postWrapperContainer}>
            <div className={styles.postContentWrapper}>
              <div key={post.id} className={styles.postContent}>
                <div className={styles.postInfo}>
                  <span className={styles.postTitle}>{post.title}</span>
                  <div
                    className={`${styles.postImgContainer} ${
                      post.image ? styles.withImage : ''
                    }`}
                  >
                    {post.image && (
                      <img className={styles.postImg} src={post.image} />
                    )}
                  </div>
                </div>
                <div className={styles.postMeta}>
                  <div className={styles.postDetails}>
                    <img
                      className={styles.profileImg}
                      src='/image/profileImg.svg'
                    />
                    <>
                      <span className={styles.nickname}>
                        {post.writer.nickname}
                      </span>
                      <span className={styles.createdAt}>
                        {formatDate(post.createdAt)}
                      </span>
                    </>
                  </div>
                  <div className={styles.likeCountWrapper}>
                    <img src='/image/likeIcon.svg' />
                    <div className={styles.likeCount}>
                      <div>{post.likeCount}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
