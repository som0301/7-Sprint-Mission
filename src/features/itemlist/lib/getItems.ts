import axios from 'axios';
import {
  BASE_URL,
  GetItemsParams,
  GetItemsResponse,
} from 'features/itemlist/lib';
import { handleAxiosError } from 'shared/lib';

// 상품 목록 조회 API
export async function getItems({
  page = 1,
  pageSize = 10,
  order = 'recent',
  search = '',
}: GetItemsParams): Promise<GetItemsResponse> {
  // URLSearchParams 객체를 사용하여 쿼리스트링 생성
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy: order,
    keyword: search,
  });

  try {
    const response = await axios.get<GetItemsResponse>(`${BASE_URL}?${params}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    }
  }
  throw new Error();
}
