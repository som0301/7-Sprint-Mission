export async function getProducts({orderBy = 'favorite', page = 0, pageSize = 0}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
  const body = await response.json();

  if(!response.ok) throw new Error('상품을 불러오는데 실패했습니다');

  return body;
}