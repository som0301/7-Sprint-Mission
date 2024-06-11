const BASE_URL = "https://panda-market-api.vercel.app/";

export async function getLists() {
  const response = await fetch(
    `${BASE_URL}products?page=1&pageSize=10&orderBy=recent`
  );
  const body = await response.json();

  return body;
}

export async function getProductById(productId) {
  const response = await fetch(`${BASE_URL}products/${productId}`);
  const body = await response.json();

  return body;
}

export async function getComments(productId) {
  const response = await fetch(
    `${BASE_URL}products/${productId}/comments?limit=100`
  );
  const body = await response.json();

  return body;
}
