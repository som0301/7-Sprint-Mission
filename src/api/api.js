const PRODUCTS_URL = "https://panda-market-api.vercel.app/products";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  const response = await fetch(`${PRODUCTS_URL}?${query}`);
  if (!response.ok) {
    throw new Error("데이터를 전송하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
