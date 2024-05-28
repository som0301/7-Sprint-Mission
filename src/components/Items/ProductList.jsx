// import SearchBar from './SearchBar';

//상품 목록을 보여주는 컴포넌트
function ProductList({ products }) {
    return (
        <div className="wrapper">
            <ul className="list">
                {products &&
                    products.map((product) => {
                        return (
                            <li key={product.id} className="">
                                {product.name}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
export default ProductList;
