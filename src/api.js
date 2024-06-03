const API_URL = "https://panda-market-api.vercel.app/products";

export async function getProducts(orderBy = "recent", page = 1, pageSize = 10) {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  const response = await fetch(`${API_URL}?${query}`);
  const body = await response.json();
  return body;
}
