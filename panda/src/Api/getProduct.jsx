export const getBestItem = async (pageSize) => {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=favorite`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

export const getForSaleItem = async (
  page = 1,
  pageSize = 10,
  order,
  keyword = ''
) => {
  try {
    // 검색어를 쿼리 파라미터에 추가합니다.
    const query = keyword ? `&keyword=${encodeURIComponent(keyword)}` : '';
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${order}${query}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
