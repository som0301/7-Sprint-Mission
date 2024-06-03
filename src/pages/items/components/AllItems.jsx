import { useState } from 'react';
import useFetchItems from 'pages/items/hooks/useFetchItems';

function Allitems() {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [order, setOrder] = useState('recent');
    const [search, setSearch] = useState('');
    const { items, loading, error } = useFetchItems({ page, pageSize, order, search });
    console.log(items);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>{items && items.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
        </div>
    );
}

export default Allitems;
