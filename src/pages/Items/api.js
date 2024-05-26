export const getProductItem = async (currentPage = 1, pageSize, order) => {
  const responsce = await fetch(
    `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=${pageSize}&orderBy=${order}`
  );
  const result = await responsce.json();
  return result;
};
