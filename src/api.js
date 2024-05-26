export const getProducts = async ({ page = 1, pageSize, orderBy }) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const body = await response.json();
  return body;
};
