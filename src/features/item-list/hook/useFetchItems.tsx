import { useEffect, useState } from 'react';
import { getItems } from 'features/item-list/lib';
import { GetItemsParams, Item } from 'features/item-list/lib';

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
        if (error instanceof Error) {
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
