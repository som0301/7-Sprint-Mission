import { useEffect, useState } from 'react';
import S from './App.module.css';
import { PandaFace } from './images';
import { getProductList } from './utils/Getproduct';
import { Pagination } from './components/Pagination';
import { favoriteCount } from './utils/FavoriteCount';

function App() {
  const [bestItems, setBestItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchBestList = async () => {
    const { list } = await getProductList({
      page: 1,
      pageSize: 4,
      orderBy: 'favorite',
    });

    setBestItems(list);
  };

  const handleBestFavoriteCount = async id => {
    const favorite = await favoriteCount(id);
    console.log(favorite);
    if ('message' in favorite) {
    }
    fetchBestList();
  };

  useEffect(() => {
    fetchBestList();
  }, []);

  const fetchAllList = async () => {
    const { list } = await getProductList({
      page,
      pageSize: 10,
      orderBy,
    });

    setAllItems(list);
  };

  // 상품 좋아요 수 상태 관리
  const handleAllFavoriteCount = async id => {
    const favorite = await fetchAllList(id);

    if ('message' in favorite) {
      console.log('좋아요 안눌림...');
    }
    fetchAllList();
  };

  useEffect(() => {
    fetchAllList();
  }, [page, orderBy]);

  // 상품 검색창 상태 관리
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter(item =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchTerm, allItems]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>
        <div className={S.header}>
          <div className={S.header_left}>
            <img
              className={S.header_logo}
              src={PandaFace}
            ></img>
            <a className={S.logo_title}>판다마켓</a>
          </div>
          <nav className={S.header_nav}>
            <ul className={S.header_nav__menu}>
              <li>
                <a className={S.free_border}>자유게시판</a>
              </li>
              <li>
                <a className={S.used_market}>중고마켓</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={S.header_right}>
          <button className={S.header_right__button}>로그인</button>
        </div>
      </header>

      <main className={S.main_product}>
        <div className={S.main_product_container}>
          <div className={S.main_product_bestproduct}>
            <h1 className={S.main_product_bestproduct_title}>베스트 상품</h1>
            <ul className={S.main_best_product}>
              {bestItems?.map(
                ({ id, images, description, price, favoriteCount }) => {
                  return (
                    <li key={id}>
                      <img
                        src={images[0]}
                        width={280}
                        height={280}
                      />
                      <div className={S.main_product_detail}>
                        <p className={S.product_description}>{description}</p>
                        <p className={S.product_price}>
                          {price.toLocaleString()}
                        </p>
                        <button onClick={() => handleBestFavoriteCount(id)}>
                          {favoriteCount}
                        </button>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div className={S.main_allproduct_container}>
            <h1 className={S.allproduct_header_title}>전체 상품</h1>
            <div className={S.all_product_header_right}>
              <input
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="검색할 상품을 입력해주세요"
              />
              <a>상품 등록하기</a>
              <select
                value={orderBy}
                onChange={e => setOrderBy(e.target.value)}
              >
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
              </select>
            </div>
          </div>
          <ul className={S.main_all_product}>
            {filteredItems?.map(
              ({ id, images, description, price, favoriteCount }) => {
                return (
                  <li key={id}>
                    <img
                      src={images[0]}
                      width={220}
                      height={220}
                    />
                    <div className={S.main_product_detail}>
                      <p className={S.product_description}>{description}</p>
                      <p className={S.product_price}>
                        {price.toLocaleString()}
                      </p>
                      <button
                        className={S.product_favorite}
                        onClick={() => handleAllFavoriteCount}
                      >
                        {favoriteCount}
                      </button>
                    </div>
                  </li>
                );
              }
            )}
          </ul>

          <div>
            <Pagination
              pageLimit={5}
              defaultpage={1}
              onChange={page => setPage(page)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
