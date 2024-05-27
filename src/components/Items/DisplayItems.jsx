// import BestProductList from './BestProductList';
import ProductList from './ProductList';

function DisplayItems({ products, loading, error }) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="wrapper">
            <ProductList products={products} />
        </div>
    );
}

export default DisplayItems;
