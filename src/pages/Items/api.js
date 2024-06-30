export const getProductItem = async (currentPage = 1, pageSize, order) => {
  try {
    const encodedPage = encodeURIComponent(currentPage);
    const encodedPageSize = encodeURIComponent(pageSize);
    const encodedOrder = encodeURIComponent(order);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${encodedPage}&pageSize=${encodedPageSize}&orderBy=${encodedOrder}`
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
    const encodedId = encodeURIComponent(id);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${encodedId}`
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
    const encodedId = encodeURIComponent(id);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${encodedId}/comments?limit=3`
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
