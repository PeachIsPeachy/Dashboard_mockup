import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function MenuItemFooter(props) {
  const { name, subMenus, to, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick}>
      <NavLink
        exact
        to={to}
        onClick={() => setExpand(!expand)}
        className="menu-item-footer"
      >
        <span>{name}</span>
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

export default MenuItemFooter;
