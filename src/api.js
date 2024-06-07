export async function getReviews({ currentPage = 1, pageSize, orderby }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${currentPage}&pageSize=${pageSize}&orderBy=${orderby}`
  );
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getProductId({productId}){
  const reponse=await fetch(`https://panda-market-api.vercel.app/products/${productId}`);
  if(!reponse.ok){
    throw new Error("상품을 찾을 수 없습니다");
  }
  const body=await reponse.json();
  return body;
}

export async function getProductIdComments({productId}){
  const reponse=await fetch(`https://panda-market-api.vercel.app/products/${productId}/comments?limit=3`);
  if(!reponse.ok){
    throw new Error("상품을 찾을 수 없습니다");
  }
  const body=await reponse.json();
  return body;
}
