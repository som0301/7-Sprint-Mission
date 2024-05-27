import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import logo from './logo.svg';
// import './App.css';

const getProductList = async (page,pageSize, orderBy, keyword) => {
  const response = await fetch(`https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=favorite`)
  return response.json();
};

const SIZE = 10;
const App = () => {

  const [products1, setProducts1] = useState();
  const [products2, setProducts2] = useState();

  const [page,SetPage] = useState(1);


  const search = () => {
    getProductList(page,SIZE, "favorite").then((productsResponse) => {
      setProducts2(productsResponse);
    });
  };

  useEffect(() => {
    getProductList(1, 4, "favorite").then((productsResponse) => {
    setProducts1(productsResponse);
    });
  }, []);


  return (
    <div className="App">
        <header>
      <a href="/">
        <img 
        src="images/logo/panda-market-logo.png" 
        alt="판다마켓홈으로이동" 
        width="153" />
      </a>
      <div class="cue">
        <a href="login.html" id="login-link">{" "} 로그인{" "} </a>
      </div>
   </header>

   <main>
    <h2>베스트 상품</h2>
    <div style = {{
      display: "flex",
      flexDirection: "row",
      gap: "24px",
    }}
    >

        {products1?.list?.map((product) => {
          return (
            <ProductCard 
              key = {product.id}
              title = {product.name}
              price = {product.price}
              likeCount = {product.favoriteCount}
              imageUrl = {product.images[0]}
            />
          )
        })}

    
    </div>

        <h2>전체 상품</h2>
        <button onClick = {search}>Search</button>

        <div style = {{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          flexWrap:"wrap",
    }}
    >

        {products2?.list?.map((product) => {
          return (
            <ProductCard 
              key = {product.id}
              title = {product.name}
              price = {product.price}
              likeCount = {product.favoriteCount}
              imageUrl = {product.images[0]}
            />
          )
        })}
    </div>
   </main>

   <footer>
    <div id ="copyright">©codeit - 2024</div>
    <div id="footerMenu">
      <a href="privacy.html">Privacy Policy</a>
      <a href="faq.html">FAQ</a>
    </div>
    <div id="social">
      <a 
        href="https://www.facebook.com/"
        rel="noopeener noreferrer"
        target="blank">
      <img 
        src="images/social/facebook-logo.svg"
        alt="페이스북로고"
        width="20" />
      </a>
      <a 
        href="https://twitter.com//"
        rel="noopeener noreferrer"
        target="blank">
      <img 
        src="images/social/twitter-logo.svg"
        alt="트위터로고"
        width="20" />
      </a>
      <a 
        href="https://www.youtube.com/"
        rel="noopeener noreferrer"
        target="blank">
      <img 
        src="images/social/youtube-logo.svg"
        rel="유튜브로고"
        width="20" />
      </a>
      <a 
        href="https://www.instagram.com//"
        rel="noopeener noreferrer"
        target="blank">
      <img 
        src="images/social/instagram-logo.svg"
        alt="인스타그램로고"
        width="20" />
      </a>
    </div>
   </footer>
    </div>
  );
}

export default App;
