const BASE_URL = process.env.REACT_APP_API_URL;

export async function getItems({
  page = 1,
  pageSize = 10,
  order = 'recent',
  search = '',
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${search}`;

  const response = await fetch(`${BASE_URL}?${query}`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
