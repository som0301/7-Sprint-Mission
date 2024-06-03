import useFetchItems from 'pages/items/hooks/useFetchItems';

function ItemsList({ type, page, pageSize, order, search }) {
    const { items, loading, error } = useFetchItems({ page, pageSize, order, search });
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>{items && items.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
        </div>
    );
}

export default ItemsList;
