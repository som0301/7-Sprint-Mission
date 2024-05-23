import logoImage from "/src/assets/logo-image.svg";

function LogoImage({ id, className }) {
  return <img src={logoImage} id={id} className={className} />;
}

export default LogoImage;
