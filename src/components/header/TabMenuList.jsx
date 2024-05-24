import React from "react";
import { NavLink } from "react-router-dom";
import "/src/styles/header/TabMenuList.css";

const activeStyle = {
  color: "#3692FF",
};

function TabMenuList({ className, children, src }) {
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
