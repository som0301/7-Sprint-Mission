import logoImage from "/src/assets/logo-image.svg";

function LogoImage({ id, className }) {
  return (
    <a href="/" style={{ display: "flex", alighItems: "center" }}>
      <img src={logoImage} id={id} className={className} />
    </a>
  );
}

export default LogoImage;
