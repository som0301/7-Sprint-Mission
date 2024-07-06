import { useEffect, useState } from 'react';

import axios from 'axios';

import { GetItemsParams, Item, getItems } from 'features/item-list/lib';

import { handleAxiosError } from 'shared/lib';

interface FetchItemsResult {
  items: Item[];
  isLoading: boolean;
  isError: string | null;
}

// 상품 목록 조회 커스텀 훅
export function useFetchItems({ page, pageSize, order, search }: GetItemsParams): FetchItemsResult {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchItems() {
      setIsLoading(true);
      try {
        const { list } = await getItems({ page, pageSize, order, search });
        setItems(list);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          handleAxiosError(error);
        }
        setIsError('상품 목록을 불러오는 중 문제가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchItems();
  }, [page, pageSize, order, search]);

  return { items, isLoading, isError };
}
