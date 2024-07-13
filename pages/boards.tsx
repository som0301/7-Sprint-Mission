import { CallArticles } from "./api/CallAPI";
import style from "@/styles/Boards.module.scss";
import BestArticles from "@/components/BestArticles";
import Recentarticles from "@/components/Recentarticles";
import { useEffect, useState } from "react";

interface ArticlesProps {
  id: number;
  title: string;
  content: string;
  image: File | null;
  likeCount: number;
  createAt: Date;
  updateAt: Date;
  writer: {
    id: number;
    nickname: string;
  };
}

interface ArticlesResopnse {
  list: ArticlesProps[];
}

function boards() {
  const [keyWord, setKeyWord] = useState<string>();
  const [order, setOrder] = useState<string>("recent");
  const [articlesList, setArticlesList] = useState<ArticlesProps[]>([]);
  const [bestArticlesList, setBestArticlesList] = useState<ArticlesProps[]>([]);
  const ArticlesLoad = async (keyword: string | undefined, order: string) => {
    const response: ArticlesResopnse = await CallArticles(keyWord, order, 20);
    setArticlesList(response.list);
  };
  const BestArticlesLoad = async () => {
    const response: ArticlesResopnse = await CallArticles(undefined, "like", 3);
    setBestArticlesList(response.list);
    console.log(response.list);
  };

  useEffect(() => {
    ArticlesLoad(keyWord, order);
    BestArticlesLoad();
  }, []);

  return (
    <div className={style.articleslayer}>
      {/* <BestArticles articlesList={bestArticlesList}/> */}
      <p>aaa</p>
      <Recentarticles />
    </div>
  );
}

export default boards;
