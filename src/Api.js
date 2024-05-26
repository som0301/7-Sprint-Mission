export async function getProducts({
  orderBy = "favorite",
  page = 1,
  pageSize = 4,
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  console.log("apibody", body);
  return body;
}
