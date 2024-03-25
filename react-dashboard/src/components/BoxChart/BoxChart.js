import blue from "../../assets/blue/blue.svg";
import "./boxChart.scss";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 3;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={radius}
      ry={radius}
    />
  );
};

const CustomTooltipContent = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid $soft-bg",
          padding: "5px",
          borderRadius: "10px",
          color: "#1F541F",
          fontSize: "15px",
        }}
      >
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
        <p>{`${payload[1].name} : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const data = [
  {
    name: "Page A",
    uv: 60,
    pv: 24,
    amt: 80,
    date: "Tue",
  },
  {
    name: "Page B",
    uv: 50,
    pv: 43,
    amt: 90,
    date: "Sun",
  },
  {
    name: "Page C",
    uv: 40,
    pv: 98,
    amt: 100,
    date: "Sat",
  },
  {
    name: "Page D",
    uv: 30,
    pv: 68,
    amt: 64,
    date: "Fri",
  },
  {
    name: "Page E",
    uv: 20,
    pv: 32,
    amt: 78,
    date: "Mon",
  },
  {
    name: "Page F",
    uv: 65,
    pv: 70,
    amt: 15,
    date: "Wed",
  },
];

function BoxChart() {
  return (
    <div className="box-chart">
      <div className="box-info">
        <div className="title">
          <span>Count</span>
          <div className="sub-title" style={{ fontSize: "12px" }}>
            Number of Detected Vehicles
          </div>
        </div>
        <div className="middle-section">
          <div className="pic">{/* <img src={blue} alt="blue logo" /> */}</div>

          <div className="extra-info">
            <h2>24</h2>
            <p style={{ fontSize: "12px" }}>Vehicles</p>
          </div>
        </div>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={300}
              height={600}
              data={data}
              margin={{
                top: 20,
                right: -35,
                left: -35,
                bottom: -10,
              }}
            >
              <CartesianGrid
                vertical={false}
                stroke="rgb(138,138,138, 0.5)"
                strokeDasharray="1.2 1.2"
              />

              <XAxis
                dataKey="date"
                interval={0}
                tick={{ fontSize: 10 }}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                interval={0}
                tickLine={false}
                tick={{ fontSize: 9 }}
              />
              <Tooltip content={<CustomTooltipContent />} />
              <Bar
                dataKey="pv"
                stackId="a"
                fill="#2E90FA"
                barSize={7}
                shape={<RoundedBar />}
                margin={{ top: 100 }}
                baseValue={-100}
              />
              <Bar
                dataKey="amt"
                stackId="a"
                fill="rgb(33,63,95, 0.5)"
                barSize={7}
                shape={<RoundedBar />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default BoxChart;
