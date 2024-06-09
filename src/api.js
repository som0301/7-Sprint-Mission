const BASE_URL = "https://panda-market-api.vercel.app";

export async function getItems({ page = 1, pageSize = 4, orderBy }) {
  const query = `/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  try {
    const response = await fetch(`${BASE_URL}${query}`);
    const data = await response.json();
    return data;
  } catch(error) {
    console.error('Error fetching items', error);
    return [];
  }
}

export async function getItemDetail(productId) {
  const query = `/products/${productId}`;
  try {
    const response = await fetch(`${BASE_URL}${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching item details", error);
  }
}


