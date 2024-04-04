import React from "react";
import "./header.scss";
import user from "../../assets/avartar/Avatar.svg";

function Header() {
  return (
    <div className="nav-header">
      <div className="icons">
        <div className="notification">
          <i class="bi bi-bell"></i>
          <span>1</span>
        </div>

        <div className="user">
          <img src={user} alt="user logo" />
          <span>Anna</span>
        </div>

        <div className="setting">
          <i class="bi bi-gear"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
