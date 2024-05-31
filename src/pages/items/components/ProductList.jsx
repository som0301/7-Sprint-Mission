// import SearchBar from './SearchBar';

//상품 목록을 보여주는 컴포넌트
function ItemList({ products }) {
    console.log('ProductList products:', products); // 디버깅용 로그
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
export default ItemList;
