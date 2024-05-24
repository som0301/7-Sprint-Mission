export async function getItems({ order = "favorite", offset = 0, limit = 6 }) {
  const query = `order=${order}`;

  
  //  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export default getItems;
