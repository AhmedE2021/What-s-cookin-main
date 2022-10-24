import { NavLink } from "react-router-dom";

export default function SLNavBar() {
  return (
    <nav className="shopping-list-small-navbar">
      <div className="shopping-list-navbar">
        <input type="text" className="shopping-list-search" id="slSearch" />
        <div className="shopping-list-navbar-links-holder">
          <NavLink to="/shopping">
            <p className="shopping-list-navbar-link">Shopping</p>
          </NavLink>
          <NavLink to="/stock">
            <p className="shopping-list-navbar-link">Stock</p>
          </NavLink>
        </div>
      </div>
      <style>
        {`
        .shopping-list-navbar-links-holder>.active {
          border-bottom: 1px solid #FFEB3B;
          }
        `}
      </style>
    </nav>
  );
}
