import "../style/header.css";
import { NavLink } from "react-router-dom";

function MenuTab() {
  return (
    <>
      <NavLink
        to="/board"
        className={({ isActive }) => (isActive ? "menu menu-active" : "menu")}
      >
        자유게시판
      </NavLink>
      <NavLink
        to="/items"
        className={({ isActive }) => (isActive ? "menu menu-active" : "menu")}
      >
        중고마켓
      </NavLink>
    </>
  );
}

export default MenuTab;
