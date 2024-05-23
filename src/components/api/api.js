export async function getProducts() {
  const url = "https://panda-market-api.vercel.app/docs/#/products";
  const query = ``;
  //   const response = await fetch(
  //     `https://panda-market-api.vercel.app/docs/#/products?${query}`
  //   );
  const response = await fetch("https://panda-market-api.vercel.app/products", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다");
  }

  const body = await response.json();
  return body;
}
