import { useEffect, useState } from 'react';
import { getItems } from 'pages/items/api/getItems';

function useFetchItems({ page, pageSize, order, search }) {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            setLoading(true);
            try {
                const { list } = await getItems({ page, pageSize, order, search });
                setItems(list);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchItems();
    }, [page, pageSize, order, search]);

    return { items, isLoading, isError };
}

export default useFetchItems;
