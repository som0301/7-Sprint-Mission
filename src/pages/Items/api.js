export const getProductItem = async (currentPage = 1, pageSize, order) => {
  const responsce = await fetch(
    `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=${pageSize}&orderBy=${order}`
  );
  const result = await responsce.json();
  return result;
};

export const getProductDetailItem = async (id) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${id}`
  );
  const result = await response.json();
  return result;
};

export const getProductDetailComments = async (id) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${id}/comments?limit=3`
  );
  const result = await response.json();
  return result;
};
