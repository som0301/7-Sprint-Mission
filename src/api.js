const BASE_URL = 'https://panda-market-api.vercel.app/products';

export default async function getItems({
  page = 1,
  pageSize = 10,
  order = 'recent',
  keyword = '',
}) {
  const response = await fetch(
    `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${keyword}`
  );
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
