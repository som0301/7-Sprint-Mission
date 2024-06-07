import { useState } from 'react';
import styled from 'styled-components';
import ItemsList from 'pages/items/components/ItemsList';
import usePageSize from './hooks/usePageSize';
import useViewport from './hooks/useViewport';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${({ deviceType }) => (deviceType === 'mobile' ? '87px' : '94px')};
    row-gap: ${({ deviceType }) => (deviceType === 'mobile' ? '24px' : '40px')};
`;

function ItemsPage() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const { deviceType } = useViewport();

    const allItemsPageSize = usePageSize('all');
    const bestItemsPageSize = usePageSize('best');
    return (
        <Container>
            <ListWrapper $deviceType={deviceType}>
                <ItemsList type="best" page={page} pageSize={bestItemsPageSize} order="favorite" search={search} />
                <ItemsList type="all" page={page} pageSize={allItemsPageSize} order="recent" search={search} />
            </ListWrapper>
        </Container>
    );
}

export default ItemsPage;
