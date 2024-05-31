export async function getItems({
  orderBy = "favorite",
  pageSize = 4,
  page = 1,
}) {
  //  5.29 query 변수로  전달받은 값을 주소로 입력해줌
  const query = `orderBy=${orderBy}&pageSize=${pageSize}&page=${page}`;

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
      
    );
    // response 값이 없거나 맞지 않으면 오류 메세지 출력
    if (!response.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("데이터를 불러오는데 실패했습니다.", error);
    throw error;
  }
}

