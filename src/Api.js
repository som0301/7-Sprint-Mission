export async function getProducts(order = "favorite", page = 1, pageSize = 4) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return body;
}

// page=1&pageSize=4&orderBy=favorite
