// export async function getItems({
//   orderBy = "favorite",
//   page = 1,
//   pageSize = 4,
// }) {
//   const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
//   const response = await fetch(
//     `https://panda-market-api.vercel.app/products?${query}`,
//     {
//       // headers: {
//       //   "Content-Type": "application/json",
//       //   Accept: "application/json",
//       // },
//       // method: "GET",
//     }
//   );
//   const body = await response.json();
//   return body;
// }

export default async function getItems({
  page = 1,
  pageSize,
  orderBy = "recent",
  search = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!response) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
