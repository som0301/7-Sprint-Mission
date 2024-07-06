interface ArticleProps {
  pageSize: number;
  orderBy: string;
}

export async function getArticles({ pageSize, orderBy }: ArticleProps) {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=${orderBy}`
    );
    if (!response.ok) {
      throw new Error("리뷰를 불러오는데 실패했습니다");
    }
    const body = await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
