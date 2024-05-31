async function useFetchItems() {
    setLoading(true);
    try {
        const { data } = await getItems({ page, pageSize, order, search });
        console.log('Fetched products:', data); // 디버깅용 로그
        setProducts(data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}
