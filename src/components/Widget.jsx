import React, { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
//outer libraries

import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Widget = ({ widget, index, widgets, dataArray }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [widgetIndex, setWidgetIndex] = useState(0);

  let {
    type,
    labels,
    legends,
    title,
    cssProperties,
    order,
    priority,
    gridPosition,
    value,
  } = widget;

  let ChartComponent;
  switch (type) {
    case "Line":
      ChartComponent = Line;
      break;
    case "Bar":
      ChartComponent = Bar;
      break;
    case "Pie":
      ChartComponent = Pie;
      break;
    case "Radar":
      ChartComponent = Radar;
      break;
    default:
      ChartComponent = Line;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: type == "Pie" ? true : false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data = {
    labels: labels,
    datasets:
      !isLoading && Array.isArray(fetchedData[0])
        ? fetchedData.map((value, index) => ({
            label: legends[index],
            data: value,
            backgroundColor: cssProperties.backgroundColor[index],
            borderColor: cssProperties.backgroundColor[index],
          }))
        : [
            {
              data: value,
              backgroundColor: cssProperties.backgroundColor,
              borderColor: cssProperties.backgroundColor,
            },
          ],
  };

  console.log(`Widget with order ${order} has been rendered`);

  return (
    <div
      id="graphDiv"
      style={{
        gridColumn: `${gridPosition[0]}/${parseInt(gridPosition[0]) + 1}`,
        gridRow: `${gridPosition[2]}/${parseInt(gridPosition[2]) + 1}`,
        width: cssProperties.width,
        height: `${
          !isLoading || type === "Radar"
            ? cssProperties.height
            : cssProperties.height
        }`,

        background: `${type == "Radar" && "rgb(255,255,255,0.3)"}`,
      }}
    >
      {value.length === 0 && <Loader />}
      <ChartComponent
        className="canvascomp"
        style={{
          width: cssProperties.width,
          height: `${!isLoading ? cssProperties.height : "auto"}`,
          background: `${type == "Radar" && "rgb(255,255,255,0.3)"}`,
          /*   display: `${isLoading ? "none" : "block"}`, */
        }}
        options={!isLoading && options}
        data={data}
      />
    </div>
  );
};

export default Widget;
