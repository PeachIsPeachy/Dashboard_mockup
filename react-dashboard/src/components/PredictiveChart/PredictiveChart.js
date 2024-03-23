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
const data = [
  {
    name: "9:00",
    Vehicle: 4000,
    Timing: 2400,
    amt: 2400,
  },
  {
    name: "10:00",
    Vehicle: 9000,
    Timing: 1398,
    amt: 2210,
  },
  {
    name: "11:00",
    Vehicle: 800,
    Timing: 9800,
    amt: 2290,
  },
  {
    name: "12:00",
    Vehicle: 2780,
    Timing: 3908,
    amt: 2000,
  },
  {
    name: "13:00",
    Vehicle: 1890,
    Timing: 4800,
    amt: 2181,
  },
  {
    name: "14:00",
    Vehicle: 2390,
    Timing: 3800,
    amt: 2500,
  },
  {
    name: "15:00",
    Vehicle: 3490,
    Timing: 4300,
    amt: 2100,
  },
  {
    name: "16:00",
    Vehicle: 14000,
    Timing: 2400,
    amt: 2400,
  },
  {
    name: "7:00",
    Vehicle: 3734,
    Timing: 5670,
    amt: 2400,
  },
  {
    name: "18:00",
    Vehicle: 7453,
    Timing: 240,
    amt: 2400,
  },
  {
    name: "19:00",
    Vehicle: 200,
    Timing: 9470,
    amt: 2400,
  },
  {
    name: "20:00",
    Vehicle: 8600,
    Timing: 6740,
    amt: 2400,
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
