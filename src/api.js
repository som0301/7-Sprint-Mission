export async function getLists() {
  const response = await fetch(
    "https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent"
  );
  const body = await response.json();

  return body;
}
