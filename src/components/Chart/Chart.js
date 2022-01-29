import React from "react";
import ChartBars from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          max={null}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
