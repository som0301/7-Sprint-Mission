import TabMenuList from './TabMenuList';

const TapStyle = {
  display: 'flex',
  displayDirection: 'column',
};

function TabMenu({ className }) {
  return (
    <div className={className} style={TapStyle}>
      <TabMenuList className='header__tab-list' src='/board'>
        자유게시판
      </TabMenuList>
      <TabMenuList className='header__tab-list active' src='/items'>
        중고마켓
      </TabMenuList>
    </div>
  );
}

export default TabMenu;
