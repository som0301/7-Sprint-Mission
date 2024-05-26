import NavigationLink from './NavigationLink';
import styles from '../styles/Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>
                    <NavigationLink href="/" text="판다마켓" type="home" />
                </h1>
                <div className={styles.wrapper}>
                    <NavigationLink href="/freeboard" text="자유게시판" type="nav" />
                    <NavigationLink href="/items" text="중고마켓" type="nav" />
                </div>
            </div>
            <NavigationLink href="/login" text="로그인" type="login" />
        </header>
    );
}

export default Header;
