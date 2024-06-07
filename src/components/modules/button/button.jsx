import { classModuleName } from '../../../modules';
import { Link } from 'react-router-dom';
import styles from './button.module.css';

function Button({ children, link, name, type = 'button', cssStyle, className, isDisable = false, onClick, inlineStyle }) {
  const disableButton = isDisable ? 'disable' : 'enable';

  if (cssStyle) {
    return (
      <Link to={link}>
        <button type={type} name={name} className={classModuleName(className, cssStyle)} style={inlineStyle} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <Link to={link}>
        <button type={type} name={name} className={classModuleName(`button ${disableButton}`, styles)} style={inlineStyle} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  }
}

export default Button;
