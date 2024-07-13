import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchArticles = async (
  page: number,
  pageSize: number,
  orderBy: string,
) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/articles`, {
      params: {
        page,
        pageSize,
        orderBy,
      },
    });
    return response.data.list;
  } catch (error) {
    throw new Error("error");
  }
};

export const fetchArticleById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("error");
  }
};

export const fetchArticleComments = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/articles/${id}/comments`,
      {
        params: {
          limit: 99,
        },
      },
    );
    return response.data.list;
  } catch (error) {
    throw new Error("error");
  }
};
