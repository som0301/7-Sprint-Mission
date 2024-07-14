import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import '@assets/styles/header/TabMenuList.css';

const activeStyle = {
  color: '#3692FF',
};

interface Props {
  className: string;
  children: ReactNode;
  src: string;
}

function TabMenuList({ className, children, src }: Props) {
  return (
    <NavLink
      className={`link ${className}`}
      style={({ isActive }) => (isActive ? activeStyle : {})}
      to={src}
    >
      {children}
    </NavLink>
  );
}

export default TabMenuList;
