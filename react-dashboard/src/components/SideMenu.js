import React, { useEffect, useState } from "react";
import logo from "../assets/logo/manta-logo.svg";
import cameraView from "../assets/cameraView/Cameraview-Icon.svg";
import simulation from "../assets/simulation/Simulation.svg";
import historicalData from "../assets/historicalData/data.svg";
import trafficFlow from "../assets/trafficFlow/Traffic-Flow.svg";
import downLogo from "../assets/downLogo/down-logo.svg";
import logoutIcon from "../assets/logoutIcon/Shape.svg";
import MenuItem from "./MenuItem";
import MenuItemFooter from "./MenuItemFooter";

const menuItems = [
  { name: "Main", exact: true, to: "/", icon: cameraView },
  {
    name: "Traffic Flow",
    exact: true,
    to: "/traffic-flow",
    icon: trafficFlow,
    subIcon: downLogo,
    subMenus: [
      { name: "Overview", to: "/traffic-flow/overview" },
      { name: "Prediction", to: "/traffic-flow/prediction" },
    ],
  },
  { name: "Simulation", to: "/simulation", icon: simulation },
  { name: "Historical Data", to: "/historical-data", icon: historicalData },
  { name: "Log Out", to: "/log-out", icon: logoutIcon },
];

const menuItemsFooter = [
  { name: "Privacy Statement", to: "/" },
  {
    name: "Technical Help",

    to: "/",
  },
  { name: "Terms of Use", to: "/" },

  { name: "Contact Us", to: "/" },
];

function SideMenu(props) {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
    props.onCollapse(inactive);
  }, [inactive, props]);

  return (
    //for toggle in and out
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      {/* top section */}
      <div className="top-section">
        <div className="logo">
          <span>
            <img src={logo} alt="Logo" />{" "}
          </span>
        </div>

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
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              icon={menuItem.icon}
              subIcon={menuItem.subIcon}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="main-menu-footer">
        <ul>
          {menuItemsFooter.map((menuItemFooter, index) => (
            <MenuItemFooter
              key={index}
              name={menuItemFooter.name}
              to={menuItemFooter.to}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;

// import React, { useEffect, useState } from "react";
// import logo from "../assets/logo/manta-logo.svg";
// import cameraView from "../assets/cameraView/Cameraview-Icon.svg";

// import simulation from "../assets/simulation/Simulation.svg";
// import historicalData from "../assets/historicalData/data.svg";
// import trafficFlow from "../assets/trafficFlow/Traffic-Flow.svg";
// import downLogo from "../assets/downLogo/down-logo.svg";

// import userIcon from "../assets/userIcon/Avatar.svg";
// import logoutIcon from "../assets/logoutIcon/Shape.svg";
// import MenuItem from "./MenuItem";
// import MenuItemFooter from "./MenuItemFooter";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const menuItems = [
//   { name: "Main", exact: true, to: "/", icon: cameraView },
//   {
//     name: "Traffic Flow",
//     // exact: true,

//     icon: trafficFlow,
//     subIcon: downLogo,
//     subMenus: [
//       { name: "Overview", to: "/traffic-flow/overview" },
//       { name: "Prediction", to: "/traffic-flow/prediction" },
//     ],
//   },
//   { name: "Simulation", to: "/simulation", icon: simulation },
//   { name: "Historical Data", to: "/historical-data", icon: historicalData },
//   { name: "Log Out", to: "/log-out", icon: logoutIcon },
// ];

// const menuItemsFooter = [
//   { name: "Privacy Statement", to: "/" },
//   {
//     name: "Technical Help",

//     to: "/",
//   },
//   { name: "Terms of Use", to: "/" },

//   { name: "Contact Us", to: "/" },
// ];

// function SideMenu(props) {
//   const [inactive, setInactive] = useState(false);

//   useEffect(() => {
//     if (inactive) {
//       document.querySelectorAll(".sub-menu").forEach((el) => {
//         el.classList.remove("active");
//       });
//     }
//     props.onCollapse(inactive);
//   }, [inactive, props]);

//   return (
//     //for toggle in and out
//     <div className={`side-menu ${inactive ? "inactive" : ""}`}>
//       {/* top section */}
//       <div className="top-section">
//         <div className="logo">
//           <span>
//             <img src={logo} alt="Logo" />{" "}
//           </span>
//         </div>
//         {/* <div className="logo-name">
//           <span>Manta</span>
//         </div> */}
//         {/* for the toggle icon to go in and out */}
//         <div
//           onClick={() => {
//             setInactive(!inactive);
//           }}
//           className="toggle-menu-icon"
//         >
//           {inactive ? (
//             <i class="bi bi-arrow-bar-right"></i>
//           ) : (
//             <i className="bi bi-arrow-bar-left"></i>
//           )}
//         </div>
//       </div>
//       {/* for the divider line */}
//       <div className="divider"></div>

//       {/* for menu */}
//       <div className="main-menu">
//         <ul>
//           {menuItems.map((menuItem, index) => (
//             <MenuItem
//               key={index}
//               name={menuItem.name}
//               exact={menuItem.exact}
//               to={menuItem.to}
//               subMenus={menuItem.subMenus || []}
//               icon={menuItem.icon}
//               subIcon={menuItem.subIcon}
//               onClick={() => {
//                 if (inactive) {
//                   setInactive(false);
//                 }
//               }}
//             />
//           ))}
//           {/* <li>
//             <a className="menu-item">
//               <div className="menu-icon">
//                 <img src={cameraView} />
//               </div>
//               <span>Main</span>
//             </a>
//           </li>
//           <MenuItem
//             name={"Traffic Flow"}
//             subMenu={[{ name: "Overview" }, { name: "Prediction" }]}
//           />
//           <li>
//             <a className="menu-item">
//               <div className="menu-icon">
//                 <img src={simulation} />
//               </div>
//               <span>Simulation</span>
//             </a>
//           </li>
//           <li>
//             <a className="menu-item">
//               <div className="menu-icon">
//                 <img src={historicalData} />
//               </div>
//               <span>Historical Data</span>
//             </a>
//           </li>
//           <li>
//             <a className="menu-item">
//               <div className="menu-icon">
//                 <img src={logoutIcon} alt="log out icon" />
//               </div>
//               <span>Log Out</span>
//             </a>
//           </li> */}
//         </ul>
//       </div>
//       {/* <div className="side-menu-footer">
//         <div className="avatar">
//           <img src={userIcon} alt="user photo" />
//         </div>
//         <div className="user-info">
//           <h5>Police Officer</h5>
//           <p>Admin Granted Access</p>
//         </div>
//       </div> */}
//       <div className="main-menu-footer">
//         <ul>
//           {menuItemsFooter.map((menuItemFooter, index) => (
//             <MenuItemFooter
//               key={index}
//               name={menuItemFooter.name}
//               to={menuItemFooter.to}
//               onClick={() => {
//                 if (inactive) {
//                   setInactive(false);
//                 }
//               }}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SideMenu;
