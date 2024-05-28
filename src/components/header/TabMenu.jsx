import TabMenuList from "./TabMenuList";

const TapStyle = {
  display: "flex",
  displayDirection: "column",
};

function TabMenu({ className }) {
  return (
    <div className={className} style={TapStyle}>
      <TabMenuList className="header__tab-list" src="/">
        자유게시판
      </TabMenuList>
      <TabMenuList className="header__tab-list active" src="/items">
        중고마켓
      </TabMenuList>
      {/* TODO: NavList로 바꿔서 깨진 css 정리하개 */}
    </div>
  );
}

export default TabMenu;
