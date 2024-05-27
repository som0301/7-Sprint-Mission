export async function getReviews({
    order = "updatedAt",
    offset = 0,
    limit = 12,
  }) {
    const query = `order=${order}&offset=${offset}&limit=${limit}`;
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    if (!response.ok) {
      throw new Error("리뷰를 불러오는데 실패했습니다");
    }
    const body = await response.json();
    return body;
  }