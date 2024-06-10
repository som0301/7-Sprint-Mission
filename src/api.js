const API_URL = process.env.REACT_APP_API_PRODUCTS_URL;

export async function getProducts(orderBy = 'recent', page = 1, pageSize = 10) {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  const response = await fetch(`${API_URL}?${query}`);
  const body = await response.json();
  return body;
}

export async function getProductDetail(productId) {
  const response = await fetch(`${API_URL}/${productId}`);
  const body = await response.json();
  return body;
}

export async function getProductComments(productId, limit = 3) {
  const query = `limit=${limit}`;
  const response = await fetch(`${API_URL}/${productId}/comments?${query}`);
  const body = await response.json();
  return body;
}
