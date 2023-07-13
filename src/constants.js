const widgets = [
  {
    type: "Bar",
    values: [12, 19, 3, 5, 2, 3, 20, 7, 8, 11, 15, 6],
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    title: "Graph Bar",
    cssProperties: {
      height: "500px",
      width: "700px",
      backgroundColor: "blue",
    },
    order: 1,
    priority: 2,
  },
  {
    type: "Line",
    values: [
      [12, 19, 3, 5, 2, 3, 20, 7, 8, 11, 15, 6],
      [6, 15, 11, 8, 7, 20, 3, 2, 5, 3, 19, 12],
    ],
    legends: ["Web App", "Mobile App"],
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    cssProperties: {
      height: "300px",
      width: "700px",
      backgroundColor: ["red", "green"],
    },
    order: 2,
    priority: 1,
  },
  {
    type: "Pie",
    values: [12, 5, 7, 2, 9],
    title: "Graph Pie",

    labels: ["January", "February", "March", "April", "May"],
    cssProperties: {
      height: "300px",
      width: "700px",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
    },
    order: 3,
    priority: 3,
  },
];

export { widgets };
