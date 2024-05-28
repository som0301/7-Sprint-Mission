import DisplayItems from './DisplayItems';
import HandlePageSize from './HandlePageSize';
import SearchItems from './SearchItems';

function Items() {
    const pageSize = HandlePageSize();
    const { products, loading, error } = SearchItems({ page: 1, pageSize, order: 'recent', search: '' });

    return <DisplayItems products={products} loading={loading} error={error} />;
}

export default Items;

// import BestProductList from '../components/BestProductList';
// import ProductList from '../components/ProductList';
// import styles from '../styles/Items.module.css';

// function getPageSize() {
//     if (window.innerWidth >= 1024) {
//         return 10;
//     }
//     if (window.innerWidth >= 768) {
//         return 6;
//     }
//     return 4;
// }

// function Items() {
//     const [products, setProducts] = useState([]);
//     const [bestproducts, setBestProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [order, setOrder] = useState('recent');
//     const [page, setPage] = useState(1);
//     const [pageSize, setPageSize] = useState(getPageSize());
//     const [search, setSearch] = useState('');

//     useEffect(() => {
//         async function fetchProducts() {
//             setLoading(true);
//             try {
//                 const { data } = await getProducts({ page, pageSize, order, search });
//                 setProducts(data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchProducts();
//     }, [page, pageSize, order, search]);

//     useEffect(() => {
//         const handleResize = () => {
//             const newSize = getPageSize();
//             if (newSize !== pageSize) {
//                 setPageSize(newSize);
//                 setPage(1);
//             }
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [pageSize]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div className={styles.wrapper}>
//             <BestProductList products={bestproducts} />
//             <ProductList products={products} />
//         </div>
//     );
// }

// export default Items;
