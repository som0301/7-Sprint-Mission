import { useState, useEffect } from 'react';

function SearchItems({ page, pageSize, order, search }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchItems();
    }, [page, pageSize, order, search]);

    return { products, loading, error };
}

export default SearchItems;
