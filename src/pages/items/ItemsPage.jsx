import { useState } from 'react';
import ItemsList from 'pages/items/components/ItemsList';
import usePageSize from './hooks/usePageSize';
import useViewport from './hooks/useViewport';

function ItemsPage() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const allItemsPageSize = usePageSize('all');
    const bestItemsPageSize = usePageSize('best');
    return (
        <div>
            <ItemsList type="all" pageSize={allItemsPageSize} order="recent" search={search} />
            <ItemsList type="best" pageSize={bestItemsPageSize} order="favorite" search={search} />
        </div>
    );
}

export default ItemsPage;
