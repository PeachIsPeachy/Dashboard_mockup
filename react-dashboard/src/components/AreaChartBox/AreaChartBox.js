import React from "react";
import "./areaChartBox.scss";
import { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Time } from "react-html5video";

function addLine(value, range) {
  const min = value + range;
  return min;
}

const data = [
  {
    name: "Page A",
    Time: 4000,
    pv: 110,
    amt: 140,
  },
  {
    name: "Page B",
    Time: 4500,
    pv: 139,
    amt: 221,
  },
  {
    name: "Page C",
    Time: 3500,
    pv: 380,
    amt: 229,
  },
  {
    name: "Page D",
    Time: 5780,
    pv: 390,
    amt: 200,
  },
  {
    name: "Page E",
    Time: 7890,
    pv: 480,
    amt: 218,
  },
  {
    name: "Page F",
    Time: 6390,
    pv: 380,
    amt: 250,
  },
  {
    name: "Page G",
    Time: 9490,
    pv: 430,
    amt: 210,
  },
  {
    name: "Page A",
    Time: 11800,
    pv: 110,
    amt: 140,
  },
  {
    name: "Page B",
    Time: 7900,
    pv: 139,
    amt: 220,
  },
  {
    name: "Page C",
    Time: 6200,
    pv: 380,
    amt: 229,
  },
  {
    name: "Page D",
    Time: 10780,
    pv: 390,
    amt: 200,
  },
  {
    name: "Page E",
    Time: 15090,
    pv: 480,
    amt: 218,
  },
  {
    name: "Page F",
    Time: 19000,
    pv: 350,
    amt: 250,
  },
  {
    name: "Page G",
    Time: 16900,
    pv: 430,
    amt: 210,
  },
];
data.forEach((item) => {
  item.line = addLine(item.Time, 2000);
});

function AreaChartBox() {
  return (
    <div className="area-chart-container">
      <div className="title-container">
        <div className="title">
          <h1> Average Red Light Wait Time</h1>
        </div>
      </div>
      <div className="chart-info">
        <div className="chart-info-container">
          <h1>15</h1>
          <div className="extra">Min</div>
        </div>
        <div className="chart-info">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 10,
              }}
            >
              <Tooltip />
              <Area
                type="natural"
                dataKey="Time"
                stroke="1A2332"
                fill="url(#gradient)"
              />

              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#0D1219" stop-opacity="1" />

                  <stop offset="100%" stop-color="#1A2332" stop-opacity="0.7" />
                </linearGradient>
              </defs>

              <Area
                type="natural"
                dataKey="line"
                stroke="#2E90FA"
                fill="none"
                strokeWidth={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AreaChartBox;
