const PRODUCT_API_URL = "https://panda-market-api.vercel.app/products";

export async function getProducts(order = "favorite", page = 1, pageSize = 4) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;
  const response = await fetch(`${PRODUCT_API_URL}?${query}`);
  const body = await response.json();
  return body;
}
