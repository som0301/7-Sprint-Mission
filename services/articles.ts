import axiosInstance from '@/libs/axiosInstance';

type OrderBy = 'recent' | 'like';

export async function getArticles(
  page = 1,
  pageSize = 10,
  orderBy: OrderBy = 'recent',
  keyword: string | null = null
) {
  const query =
    `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}` +
    (keyword ? `&keyword=${keyword}` : '');
  const response = await axiosInstance.get(`/articles?${query}`);
  return response.data;
}
