export async function getItems({
  orderBy = "favorite",
  page = 1,
  pageSize = 4,
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "GET",
    }
  );
  const body = await response.json();
  return body;
}
