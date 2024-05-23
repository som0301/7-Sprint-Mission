import "/src/styles/header/TabMenuList.css";

function TabMenuList({ className, children, src }) {
  return (
    <li className={className}>
      <a href={src}>{children}</a>
    </li>
  );
}

export default TabMenuList;
