const DEFAULT_PAGE = 'https://panda-market-api.vercel.app';

export async function getProducts({orderBy = 'favorite', page = 0, pageSize = 0, keyword = ''}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(`${DEFAULT_PAGE}/products?${query}`);
  const body = await response.json();

  if(!response.ok) throw new Error('상품을 불러오는데 실패했습니다');

  return body;
}

export async function getProductComments(id,limit = 999) {
  const response = await fetch(`${DEFAULT_PAGE}/products/${id}/comments?limit=${limit}`);
  const body = await response.json();

  if(!response.ok) throw new Error('상품 코멘트를 불러오는데 실패했습니다');

  return body;
}