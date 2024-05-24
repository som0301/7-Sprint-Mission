import Button from "../common/Button";
import TabMenu from "./TabMenu";

import LogoImage from "./LogoImage";

const flexColumnStyle = {
  display: "flex",
  displayDirction: "column",
  alignItems: "center",
  gap: "32px",
};

function Header({ id }) {
  return (
    <header id={id}>
      <div style={flexColumnStyle}>
        <LogoImage id="header-logo" />
        <TabMenu class="header__tab" />
      </div>
      <Button className="btn btn-small">로그인</Button>
    </header>
  );
}

export default Header;
