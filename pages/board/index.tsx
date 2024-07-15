import styles from './index.module.scss';
import Button from '@/components/Button';
import BestArticle from '@/containers/board/BestAticle';
import SearchBar from '@/containers/board/SearchBar';
import SelectBox from '@/containers/board/SelectBox';
import Article from '@/containers/board/Article';
import { Article as ArticleType, OrderBy } from '@/types/article.d';
import { getArticles } from '@/services/articles';
import { useEffect, useState, KeyboardEvent } from 'react';
import { SELECT_ORDER, SelectdValue, selectList } from '@/types/select-order.d';
import { useResponsive } from '@/hooks/useResponsive';

type ArticleKind = 'normal' | 'best';

const ARTICLE_SIZE = 10;

const BEST_ARTICLE_SIZE = {
  PC: 3,
  TABLET: 2,
  MOBILE: 1,
};

export async function getServerSideProps() {
  const initialArticles =
    (await getArticles(1, ARTICLE_SIZE, 'recent', null)).list ?? [];
  const initialBestArticles =
    (await getArticles(1, BEST_ARTICLE_SIZE.PC, 'like', null)).list ?? [];

  return {
    props: {
      initialArticles,
      initialBestArticles,
    },
  };
}

interface Props {
  initialArticles: ArticleType[];
  initialBestArticles: ArticleType[];
}

const BoardPage = ({ initialArticles, initialBestArticles }: Props) => {
  const [articles, setArticles] = useState<ArticleType[]>(initialArticles);
  const [bestArticles, setBestArticles] =
    useState<ArticleType[]>(initialBestArticles);
  const [order, setOrder] = useState<OrderBy>('recent');
  const [keyword, setKeyword] = useState<string | null>(null);
  const { isDesktop, isTablet, isMobile } = useResponsive();

  const handleLoadAtrilces = async (
    page = 1,
    pageSize = ARTICLE_SIZE,
    order: OrderBy = 'recent',
    target: ArticleKind = 'normal',
    keyword: string | null = null
  ) => {
    const { list } = await getArticles(page, pageSize, order, keyword);

    if (target === 'normal') {
      setArticles(list);
    } else if (target === 'best') {
      setBestArticles(list);
    }
  };

  const handleLoadResponsive = async () => {
    if (isDesktop) {
      handleLoadAtrilces(1, BEST_ARTICLE_SIZE.PC, 'like', 'best');
    } else if (isTablet) {
      handleLoadAtrilces(1, BEST_ARTICLE_SIZE.TABLET, 'like', 'best');
    } else if (isMobile) {
      handleLoadAtrilces(1, BEST_ARTICLE_SIZE.MOBILE, 'like', 'best');
    }
  };

  const handleSelect = (selectedValue: SelectdValue) => {
    if (selectedValue === SELECT_ORDER.RECENT) {
      setOrder('recent');
    } else if (selectedValue === SELECT_ORDER.FAVORITE) {
      setOrder('like');
    }
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      if (target.value === '') {
        setKeyword(null);
      } else {
        setKeyword(target.value);
      }
    }
  };

  useEffect(() => {
    handleLoadAtrilces(1, 10, order, 'normal', keyword);
    handleLoadResponsive();
  }, [order, isDesktop, isTablet, isMobile, keyword]);

  return (
    <div className={styles.boardPage}>
      <div className={styles.bestArticles}>
        <div className={styles.header}>
          <div className={styles.title}>베스트 게시글</div>
          <div className={styles.aticleContainer}>
            {bestArticles?.map((article) => {
              return (
                <BestArticle key={article.id} article={article}></BestArticle>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.normalArticles}>
        <div className={styles.header}>
          <div className={styles.title}>게시글</div>
          <Button skin='skyBlue' className={styles.btnWrite}>
            글쓰기
          </Button>
        </div>
        <div className={styles.controlBar}>
          <SearchBar handleSearch={handleSearch} />
          <SelectBox selectList={selectList} handleSelect={handleSelect} />
        </div>
        <div className={styles.aticleContainer}>
          {articles?.map((article) => {
            return <Article key={article.id} article={article}></Article>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
