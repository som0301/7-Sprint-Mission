export const getProductList = async ({ page, pageSize, orderBy, keyword }) => {
  const queryString = new URLSearchParams({
    page,
    pageSize,
    orderBy,
    keyword: keyword ?? '',
  }).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${queryString}`
    );

    if (!response.ok) {
      throw new Error('정보를 불러오지 못했습니다.');
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
