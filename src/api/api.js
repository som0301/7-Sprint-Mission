export async function getItems({
  orderBy = "favorite",
  pageSize = 4,
  page = 1,
}) {
  const query = `orderBy=${orderBy}&pageSize=${pageSize}&page=${page}`;

  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();

  return body;
}

export async function getItemDetails({
  productId = 0,
  comments = null,
  limit = 1,
  cursor = 0,
}) {
  let query = `${productId}`;
  if (comments !== null) {
    query += `/comments?limit=${limit}&cursor=${cursor}`;
  }

  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${query}`
  );
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();

  return body;
}

export default getItems;
