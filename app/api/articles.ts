const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchArticles = async (
  page: number,
  pageSize: number,
  orderBy: string,
) => {
  const response = await fetch(
    `${API_BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`,
  );
  if (!response.ok) {
    throw new Error("error");
  }
  const data = await response.json();
  return data.list;
};
