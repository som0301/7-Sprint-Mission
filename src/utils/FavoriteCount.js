export const favoriteCount = async id => {
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${id}/favorite`,
      {
        method: 'POST',
      }
    );

    if (!response.ok) {
      throw new Error('좋아요 안 눌러졌음..');
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return { message: error.message };
  }
};
