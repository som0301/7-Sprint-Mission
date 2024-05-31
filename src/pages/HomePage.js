import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../utils/Api";
import Products from "../components/Products";
import "../styles/common.css";
import "../styles/HomePage.css";

function HomePage() {
  const [order, setOrder] = useState("recent"); // 전체 상품의 기본 정렬을 최신순으로 설정
  const [bestProducts, setBestProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [pages, setPages] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  // useEffect로 초기데이터 가져오기
  const loadBestProducts = async () => {
    const { list } = await getProducts("favorite");
    setBestProducts(list);
  };

  const loadAllProducts = async (orderQuery) => {
    const { list } = await getProducts(orderQuery);
    setAllProducts(list);
  };

  useEffect(() => {
    loadBestProducts();
    loadAllProducts(order);
  }, [order]);

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <div className="main">
        <div className="bestProducts">
          <span>베스트 상품</span>
          <Products products={bestProducts} />
        </div>
        <div className="allProducts">
          <div className="allProductsTitle">
            <span>전체 상품</span>
            <div>
              <input placeholder="검색할 상품을 입력해주세요" />
              <Link to="/additem">
                <button>상품 등록하기</button>
              </Link>
              <select
                name="SelectOrder"
                onChange={handleOrderChange}
                value={order}
              >
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>
          <Products products={allProducts} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
