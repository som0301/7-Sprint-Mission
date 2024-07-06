import { ApiResponse } from '../Types/item';

export const getBestItem = async (pageSize: number): Promise<ApiResponse> => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=1&pageSize=${pageSize}&orderBy=favorite`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: ApiResponse = await response.json();
  return data;
};

export const getForSaleItem = async (
  page: number = 1,
  pageSize: number = 10,
  order: string,
  keyword: string = ''
): Promise<ApiResponse> => {
  const query = keyword ? `&keyword=${encodeURIComponent(keyword)}` : '';
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${order}${query}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: ApiResponse = await response.json();
  return data;
};
