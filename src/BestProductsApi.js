export async function getBestProducts({
  page = 1,
  pageSize = 4,
  orderBy = "favorite",
}) {
  const bestProductsQuery = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const bestProductsResponse = await fetch(
    `https://panda-market-api.vercel.app/products?${bestProductsQuery}`
  );
  const bestProductsBody = await bestProductsResponse.json();
  return bestProductsBody;
}

export default getBestProducts;
