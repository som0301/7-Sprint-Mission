import { useState, useEffect } from 'react';
import { getProducts } from '../../api/api';

function SearchItems({ page, pageSize, order, search }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const { data } = await getProducts({ page, pageSize, order, search });
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [page, pageSize, order, search]);

    return { products, loading, error };
}

export default SearchItems;
