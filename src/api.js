export async function getItems() {
  const BASE_URL = `https://panda-market-api.vercel.app`;
  const query = {};
  const response = await fetch(`${BASE_URL}/items?${query}`);
  const data = await response.json();
  return data;
}
