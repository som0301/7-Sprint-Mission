import logoText from "/src/assets/logo-text.svg";
import { Link } from "react-router-dom";

function LogoText({ className }) {
  return (
    <Link to="/">
      <img src={logoText} className={className} />
    </Link>
  );
}

export default LogoText;
