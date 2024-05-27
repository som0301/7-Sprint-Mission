export async function getItems({ page = 1, pageSize = 4, orderBy }) {
  const BASE_URL = "https://panda-market-api.vercel.app";
  const query = `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(`${BASE_URL}${query}`);
  const data = await response.json();
  return data;
}
