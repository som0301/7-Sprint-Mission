import logoImage from "/src/assets/logo-image.svg";
import { Link } from "react-router-dom";

function LogoImage({ id, className }) {
  return (
    <Link to="/">
      <img src={logoImage} className={className} />
    </Link>
  );
}

export default LogoImage;
