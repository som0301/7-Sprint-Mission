const BASE_URL = "https://panda-market-api.vercel.app";

export async function getArticles(
  page: number = 1,
  pageSize: number,
  orderBy: string,
  keyword = ""
) {
  try {
    const encodedPage = encodeURIComponent(page);
    const encodedPageSize = encodeURIComponent(pageSize);
    const encodedOrderBy = encodeURIComponent(orderBy);
    const encodedKeyword = encodeURIComponent(keyword);

    const response = await fetch(
      `${BASE_URL}/articles?page=${encodedPage}&pageSize=${encodedPageSize}&orderBy=${encodedOrderBy}&keyword=${encodedKeyword}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const article = response.json();

    return article;
  } catch (error) {
    console.error("Error fetching Articles", error);
  }
}
