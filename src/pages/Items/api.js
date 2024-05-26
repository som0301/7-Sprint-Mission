export const getProductItem = async (page = 1, pageSize, order) => {
  const responsce = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${order}`
  );
  const result = await responsce.json();
  return result.list;
};
