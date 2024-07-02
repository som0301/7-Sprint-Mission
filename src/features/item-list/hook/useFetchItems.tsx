import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { GetItemsParams, Item, getItems } from 'features/item-list/lib';

// 상품 목록 조회 커스텀 훅
export function useFetchItems({
  page,
  pageSize,
  order,
  search,
}: GetItemsParams) {
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
        if (error instanceof AxiosError) {
          setIsError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchItems();
  }, [page, pageSize, order, search]);

  return { items, isLoading, isError };
}
