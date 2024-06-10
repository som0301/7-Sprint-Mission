const baseURL = process.env.REACT_APP_API_BASE_URL;

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  const response = await fetch(`${baseURL}?${query}`);
  if (!response.ok) {
    throw new Error("데이터를 전송하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
