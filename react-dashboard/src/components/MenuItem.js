import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
  const { name, subMenus, icon, subIcon, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick}>
      <NavLink
        exact
        to={to}
        onClick={() => setExpand(!expand)}
        className="menu-item"
      >
        <div className="menu-icon">
          <img src={icon} alt="icon for each menu item" />
        </div>

        <span>{name}</span>
        {subMenus && subMenus.length > 0 ? (
          <div className="down-logo">
            <img src={subIcon} alt="icon for each submenu item" />
          </div>
        ) : null}
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default MenuItem;
