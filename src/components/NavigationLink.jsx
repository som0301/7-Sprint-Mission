import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/NavigationLink.module.css';

function NavigationLink({ href, text, type }) {
    const types = {
        home: styles.home,
        nav: styles.nav,
        login: styles.login,
    };

    let className = types[type] || '';

    if (type === 'nav') {
        return (
            <NavLink to={href} className={({ isActive }) => (isActive ? `${className} ${styles.active}` : className)}>
                {text}
            </NavLink>
        );
    } else {
        return (
            <Link to={href} className={className}>
                {text}
            </Link>
        );
    }
}

export default NavigationLink;
