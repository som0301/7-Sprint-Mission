import logoText from "/src/assets/logo-text.svg";

function LogoText({ className }) {
  return (
    <a href="/" style={{ display: "flex", alighItems: "center" }}>
      <img src={logoText} className={className} />
    </a>
  );
}
// TODO: NavLink로 변경하기..

export default LogoText;
