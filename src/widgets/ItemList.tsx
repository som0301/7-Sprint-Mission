import { useState } from 'react';
import styled from 'styled-components';
import usePageSize from 'pages/items/hooks/usePageSize';
import useViewport from 'shared/hook/useViewport';
import ItemsList from 'pages/items/components/ItemsList';
import Pagination from 'pages/items/components/Pagination';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ $deviceType }) =>
    $deviceType === 'mobile' ? '87px' : '94px'};
  row-gap: ${({ $deviceType }) => ($deviceType === 'mobile' ? '24px' : '40px')};
`;

function ItemList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('recent');
  const { deviceType } = useViewport();

  const allItemsPageSize = usePageSize('all');
  const bestItemsPageSize = usePageSize('best');
  return (
    <Container>
      <ListWrapper $deviceType={deviceType}>
        <ItemsList
          type='best'
          page={1}
          pageSize={bestItemsPageSize}
          order='favorite'
          search={search}
        />
        <ItemsList
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

export default ItemList;
