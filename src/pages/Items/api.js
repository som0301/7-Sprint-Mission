export const getProductItem = async (currentPage = 1, pageSize, order) => {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=${pageSize}&orderBy=${order}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product items:", error);
  }
};

export const getProductDetailItem = async (id) => {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product detail item:", error);
  }
};

export const getProductDetailComments = async (id) => {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${id}/comments?limit=3`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product detail comments:", error);
  }
};
