import React, { useState } from "react";
import logo from "../assets/logo/manta-logo.svg";
import cameraView from "../assets/cameraView/Cameraview-Icon.svg";
import trafficFlow from "../assets/trafficFlow/Traffic-Flow.svg";
import simulation from "../assets/simulation/Simulation.svg";
import historicalData from "../assets/historicalData/data.svg";
import downLogo from "../assets/downLogo/down-logo.svg";
import userIcon from "../assets/userIcon/Avatar.svg";
import logoutIcon from "../assets/logoutIcon/Shape.svg";

function SideMenu() {
  const [inactive, setInactive] = useState(false);

  return (
    //for toggle in and out
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      {/* top section */}
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="logo-name">Manta</div>
        {/* for the toggle icon to go in and out */}
        <div
          onClick={() => {
            setInactive(!inactive);
          }}
          className="toggle-menu-icon"
        >
          {inactive ? (
            <i class="bi bi-arrow-bar-right"></i>
          ) : (
            <i className="bi bi-arrow-bar-left"></i>
          )}
        </div>
      </div>
      {/* for the divider line */}
      <div className="divider"></div>

      {/* for menu */}
      <div className="main-menu">
        <ul>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <img src={cameraView} />
              </div>
              Main
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <img src={trafficFlow} />
              </div>
              Traffic Flow
              <div className="down-logo">
                <img src={downLogo} />
              </div>
            </a>
            <ul className="sub-menu">
              <li>
                <a>Overview</a>
              </li>
              <li>
                <a>Prediction</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <img src={simulation} />
              </div>
              Simulation
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <img src={historicalData} />
              </div>
              Historical Data
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <img src={logoutIcon} alt="log out icon" />
              </div>
              Log Out
            </a>
          </li>
        </ul>
      </div>
      <div className="side-menu-footer">
        <div className="avatar">
          <img src={userIcon} alt="user photo" />
        </div>
        <div className="user-info">
          <h5>Police Officer</h5>
          <p>Admin Granted Access</p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
