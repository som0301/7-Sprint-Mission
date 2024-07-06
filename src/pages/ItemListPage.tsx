import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { ItemList } from 'widgets/item-list';

import { usePageSize } from 'features/item-list/hook';
import { GetItemsParams } from 'features/item-list/lib/api';
import { Pagination } from 'features/item-list/ui';

import { DeviceTypeProps } from 'shared/lib';
import { useDeviceType } from 'shared/store';

type PageType = GetItemsParams['page'];
type SearchType = GetItemsParams['search'];
type OrderType = GetItemsParams['order'];

export function ItemListPage() {
  const [page, setPage] = useState<PageType>(1);
  const [search, setSearch] = useState<SearchType>('');
  const [order, setOrder] = useState<OrderType>('recent');

  const deviceType = useDeviceType();

  const allItemsPageSize = usePageSize('all');
  const bestItemsPageSize = usePageSize('best');
  useEffect(() => {
    setSearch('');
  }, []);

  return (
    <ListWrapper $deviceType={deviceType}>
      <ItemList
        type='best'
        page={1}
        pageSize={bestItemsPageSize}
        order='favorite'
        search={search}
      />
      <ItemList
        type='all'
        page={page}
        pageSize={allItemsPageSize}
        order={order}
        setOrder={setOrder}
        search={search}
      />
      <Pagination type='all' page={page} setPage={setPage} />
    </ListWrapper>
  );
}

const ListWrapper = styled.div<DeviceTypeProps>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ $deviceType }) => ($deviceType === 'mobile' ? '87px' : '94px')};
  row-gap: ${({ $deviceType }) => ($deviceType === 'mobile' ? '24px' : '40px')};
`;
