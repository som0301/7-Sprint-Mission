interface ArticleProps {
  pageSize: number;
  orderBy: string;
}

interface Article {
  content: string;
  createdAt: string;
  id: number;
  image: string | null;
  likeCount: number;
  title: string;
  writer: {
    id: number;
    nickname: string;
  };
}
interface ArticleList {
  list: Article[];
}

export async function getArticles({ pageSize, orderBy }: ArticleProps){
  const url = `https://panda-market-api.vercel.app/articles?page=1&pageSize=${pageSize}&orderBy=${orderBy}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching articles: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
