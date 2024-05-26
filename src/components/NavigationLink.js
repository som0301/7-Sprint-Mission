import styles from '../styles/NavigationLink.module.css';

function NavigationLink({ href, text, type }) {
    const types = {
        home: styles.home,
        nav: styles.nav,
        login: styles.login,
    };

    let className = types[type];

    switch (type) {
        case 'home':
            className = styles.home;
            break;
        case 'nav':
            className = styles.nav;
            break;
        case 'login':
            className = styles.login;
            break;
        default:
            className = '';
            break;
    }

    return (
        <a href={href} className={className}>
            {text}
        </a>
    );
}

export default NavigationLink;
