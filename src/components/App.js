import '../styles/main.css';
import '../styles/reset.css';
import '../styles/fonts.css';

function App() {
    return (
        <div>
            <header class="header">
                <div class="header__container">
                    <h1>
                        <a href="/" class="header__logo">
                            판다마켓
                        </a>
                    </h1>
                    <div class="header__wrapper">
                        <a href="/freeboard" class="header__nav">
                            자유게시판
                        </a>
                        <a href="/items" class="header__nav">
                            중고마켓
                        </a>
                    </div>
                </div>
                <a href="/login" class="header__login-btn">
                    로그인
                </a>
            </header>
        </div>
    );
}

export default App;
