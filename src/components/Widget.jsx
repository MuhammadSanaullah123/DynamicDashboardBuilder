import React, { useEffect } from "react";

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

const Widget = ({ widget }) => {
  let { type, values, labels, legends, title, cssProperties, order, priority } =
    widget;

  //To check the rendering priority
  console.log(`${type} was rendered ${priority}`);

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
        display: Array.isArray(values[0]) || type == "Pie" ? true : false,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: Array.isArray(values[0])
      ? values.map((value, index) => ({
          label: legends[index],
          data: value,
          backgroundColor: cssProperties.backgroundColor[index],
          borderColor: cssProperties.backgroundColor[index],
        }))
      : [
          {
            data: values,
            backgroundColor: cssProperties.backgroundColor,
            borderColor: cssProperties.backgroundColor,
          },
        ],
  };

  return (
    <div
      id="graphDiv"
      style={{
        gridRow: `${order}/${order + 1}`,
        width: cssProperties.width,
        height: cssProperties.height,
      }}
    >
      <ChartComponent options={options} data={data} />
    </div>
  );
};

export default Widget;
