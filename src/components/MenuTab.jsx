import "../style/header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function MenuTab() {
  return (
    <Router>
      <ul>
        <li className="menu">자유게시판</li>
        <li className="menu menu-active">
          <Link to="/items" className="nav-link">
            중고마켓
          </Link>
        </li>
      </ul>
    </Router>
  );
}

export default MenuTab;
