import { useState } from 'react';

import styled from 'styled-components';

import { ItemList } from 'widgets/item-list';

import { usePageSize } from 'features/item-list/hook';
import { Pagination } from 'features/item-list/ui';

import { useDeviceType } from 'shared/store';

export function ItemListPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('recent');

  const deviceType = useDeviceType();
  const allItemsPageSize = usePageSize('all');
  const bestItemsPageSize = usePageSize('best');

  return (
    <Container>
      <ListWrapper>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ $deviceType }) => ($deviceType === 'mobile' ? '87px' : '94px')};
  row-gap: ${({ $deviceType }) => ($deviceType === 'mobile' ? '24px' : '40px')};
`;
