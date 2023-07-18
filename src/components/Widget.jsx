import React, { useEffect, useState } from "react";
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

const Widget = ({ widget }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  let {
    type,
    values,
    labels,
    legends,
    title,
    cssProperties,
    order,
    priority,
    delay,
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
    datasets: Array.isArray(fetchedData[0])
      ? fetchedData.map((value, index) => ({
          label: legends[index],
          data: value,
          backgroundColor: cssProperties.backgroundColor[index],
          borderColor: cssProperties.backgroundColor[index],
        }))
      : [
          {
            data: fetchedData,
            backgroundColor: cssProperties.backgroundColor,
            borderColor: cssProperties.backgroundColor,
          },
        ],
  };

  useEffect(() => {
    const handleFetch = async () => {
      const fetchedData = await fetch(
        "https://run.mocky.io/v3/a48e0e6d-f958-49d7-b3e2-405da44f3ac7"
      );
      const temp = await fetchedData.json();
      setFetchedData(temp.data);
      console.log(
        `Chart data with priority ${priority} is fetched and displayed`
      );
    };

    const timer = setTimeout(() => {
      handleFetch();
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="graphDiv"
      style={{
        gridRow: `${order}/${order + 1}`,
        width: cssProperties.width,
        height: cssProperties.height,
        background: `${type == "Radar" && "rgb(255,255,255,0.3)"}`,
      }}
    >
      <ChartComponent options={!isLoading && options} data={data} />
    </div>
  );
};

export default Widget;
