import { classModuleName } from '../../../modules';
import styles from './button.module.css';

function Button({ children, name, type = 'button', cssStyle, className, isDisable = false, onClick, inlineStyle }) {
  const disableButton = isDisable ? 'disable' : 'enable';

    return (
        <button type={type} name={name} className={classModuleName((cssStyle ? className : `button ${disableButton}`), (cssStyle ? cssStyle : styles))} style={inlineStyle} onClick={onClick}>
          {children}
        </button>
    );
}

export default Button;
