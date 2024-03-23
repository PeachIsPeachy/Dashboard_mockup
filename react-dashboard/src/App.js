import "./App.css";
import SideMenu from "./components/SideMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
// import TrafficFlowPage from "./components/TrafficPage/TrafficFlowPage";
import Overview from "./components/Overview/Overview";

const OverView = () => {
  return <h1>Overview Page</h1>;
};

const Simulation = () => {
  return <h1>Simulation Page</h1>;
};

const HistoricalData = () => {
  return <h1>Simulation Page</h1>;
};

const LogOut = () => {
  return <h1>Simulation Page</h1>;
};

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            {/* <Route path="/traffic-flow" element={<TrafficFlowPage />} /> */}
            <Route path="traffic-flow/overview" element={<Overview />} />
            <Route path="traffic-flow/simulation" element={<Simulation />} />
            <Route path="/historical-data" element={<HistoricalData />} />
            <Route path="/log-out" element={<LogOut />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
