const API_URL = process.env.REACT_APP_API_BASE_URL;

export async function getProducts(orderBy = 'recent', page = 1, pageSize = 10) {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  const response = await fetch(`${API_URL}?${query}`);
  const body = await response.json();
  return body;
}
