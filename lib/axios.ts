import axios from "axios";

interface getPostParams {
  page: number;
  pageSize: number;
  orderBy: string;
  search?: string;
  image?: string;
}

export default async function getPosts({
  page = 1,
  pageSize = 3,
  orderBy = "like",
  search = "",
}: getPostParams) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const baseURL = `https://panda-market-api.vercel.app/articles?${query}`;

  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log("Error fetching posts", error);
    throw error;
  }
}
