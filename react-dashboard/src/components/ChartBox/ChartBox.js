import "./chartBox.scss";
import { Link } from "react-router-dom";

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    Velocity: 24,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    Velocity: 13,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    Velocity: 98,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    Velocity: 39,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    Velocity: 48,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    Velocity: 38,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    Velocity: 43,
    amt: 2100,
  },
];

function ChartBox() {
  return (
    <div className="chartBox">
      <div className="box-info">
        <div className="title">
          Avg. Velocity
          <div className="sub-title">
            20 Km/H
            <div className="sub-title-1">En Route</div>
          </div>
        </div>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
              />
              <CartesianGrid horizontal={false} strokeDasharray="3 3" />

              <Line
                type="monotone"
                dataKey="Velocity"
                stroke="#039855"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
