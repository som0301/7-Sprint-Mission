interface ArticleProps {
  pageSize: number;
  orderBy: string;
  keyword?: string;
}

interface BoardProps{
  articleId:number;
}

interface CommentProps{
  articleId:number;
  limit:number;
}

export async function getArticles({ pageSize, orderBy, keyword="" }: ArticleProps){
  const url = `https://panda-market-api.vercel.app/articles?page=1&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
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

export async function getArticlesId({ articleId }:BoardProps) {
  const url = `https://panda-market-api.vercel.app/articles/${articleId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching articles: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.log("Error fetching articles:", error);
    throw error;
  }
}

export async function getArticlesComment({ articleId,limit }:CommentProps){
  const url=`https://panda-market-api.vercel.app/articles/${articleId}/comments?limit=${limit}`;
  try{
    const response=await fetch(url);
    if(!response.ok){
      throw new Error(`Error fetching articles: ${response.status}`);
    }
    const body=await response.json();
    return body;
  }catch(error){
    console.log("Error fetching articles:", error);
    throw error;
  }
}
