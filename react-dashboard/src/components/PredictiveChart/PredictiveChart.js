import "./predictiveChart.scss";
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
import "../../styles/variables.scss";
import "../../styles/responsive.scss";
import logo from "../../assets/signIcon/arrow.svg";

const data = [
  {
    name: "9:00",
    Vehicle: 120,
    Timing: 40,
  },
  {
    name: "10:00",
    Vehicle: 200,
    Timing: 18,
  },
  {
    name: "11:00",
    Vehicle: 150,
    Timing: 74,
  },
  {
    name: "12:00",
    Vehicle: 450,
    Timing: 100,
  },
  {
    name: "13:00",
    Vehicle: 800,
    Timing: 400,
  },
  {
    name: "14:00",
    Vehicle: 890,
    Timing: 640,
  },
  {
    name: "15:00",
    Vehicle: 619,
    Timing: 234,
  },
  {
    name: "16:00",
    Vehicle: 1029,
    Timing: 756,
  },
  {
    name: "7:00",
    Vehicle: 1000,
    Timing: 607,
  },
  {
    name: "18:00",
    Vehicle: 1100,
    Timing: 980,
  },
  {
    name: "19:00",
    Vehicle: 923,
    Timing: 576,
  },
  {
    name: "20:00",
    Vehicle: 1300,
    Timing: 1100,
  },
];

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
          fontSize: "8px",
        }}
      >
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
        <p>{`${payload[1].name} : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

function PredictiveChart() {
  return (
    <div className="predictive-Box">
      <div className="box-info">
        <div className="header">
          <div className="title">
            Predictive Analysis
            <div className="sub-title">
              <ul>
                <li className="except">Today</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <img src={logo} alt="blue logo" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="chart-info">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: -30,
                bottom: 5,
              }}
            >
              <CartesianGrid
                horizontal={false}
                vertical={false}
                strokeDasharray="4 4"
              />
              <XAxis
                dataKey="name"
                interval={0} // Set interval to 0 to show all labels
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10, fill: "#FFFFFF" }} // Set font size and color
              />

              <YAxis
                tick={null} // Removes the ticks on the Y-axis
                axisLine={false} // Removes the axis line
              />
              <Tooltip content={<CustomTooltipContent />} />
              <Line
                type="monotone"
                dataKey="Timing"
                stroke="#3E6BEC"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="Vehicle"
                stroke="#1F541F"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default PredictiveChart;
