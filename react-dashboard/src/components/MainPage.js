import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import ChartBox from "./ChartBox/ChartBox";
import Camera from "./Camera/Camera";
import BoxChart from "./BoxChart/BoxChart";
import PredictiveChart from "./PredictiveChart/PredictiveChart";
import AreaChartBox from "./AreaChartBox/AreaChartBox";

function MainPage() {
  return (
    <div className="home">
      <div className="box box1">
        <ChartBox />
      </div>
      <div className="box box2">
        <Camera />
      </div>
      <div className="box box3">
        <BoxChart />
      </div>
      <div className="box box4">
        <AreaChartBox />
      </div>
      <div className="box box5">
        <PredictiveChart />
      </div>
    </div>
  );
}

export default MainPage;
