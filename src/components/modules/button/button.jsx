import { classModuleName } from '../../../modules';
import { Link } from 'react-router-dom';
import styles from './button.module.css';

function Button({ children, link, name, type = 'button', cssStyle, className, isDisable = false, onClick, inlineStyle }) {
  const disableButton = isDisable ? 'disable' : 'enable';

    return (
      <Link to={link} className={classModuleName('link', styles)}>
        <button type={type} name={name} className={classModuleName((cssStyle ? className : `button ${disableButton}`), (cssStyle ? cssStyle : styles))} style={inlineStyle} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
}

export default Button;
