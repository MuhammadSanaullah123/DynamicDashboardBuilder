const widgets = [
  {
    type: "Bar",
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
    title: "Revenue Generated",
    cssProperties: {
      height: "500px",
      width: "600px",
      backgroundColor: "blue",
    },
    gridPosition: "1/1", //1st column and 1st row
    order: 5,
    priority: 3,
    value: [],
  },
  {
    type: "Bar",
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
    title: "Revenue Generated",
    cssProperties: {
      height: "500px",
      width: "600px",
      backgroundColor: "blue",
    },
    gridPosition: "2/1", //1st column and 2nd row
    order: 4,
    priority: 3,
    value: [],
  },
  {
    type: "Pie",
    title: "# of votes ",

    labels: ["React", "Angular", "Vanilla JS", "Ruby", "Svelte"],
    cssProperties: {
      height: "400px",
      width: "400px",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
    },
    gridPosition: "1/2", //2nd column and 1st row
    order: 3,
    priority: 2,
    value: [],
  },

  {
    type: "Radar",
    title: "Expense ",
    labels: ["Marketing", "Salary", "License", "Rent", "Maintenance"],
    cssProperties: {
      height: "300px",
      width: "700px",
      backgroundColor: "rgba(153, 102, 255, 0.6)",
    },
    gridPosition: "1/3", //1st column and 3rd row
    order: 2,
    priority: 2,
    value: [],
  },
  {
    type: "Radar",
    title: "Expense ",
    labels: ["Marketing", "Salary", "License", "Rent", "Maintenance"],
    cssProperties: {
      height: "300px",
      width: "700px",
      backgroundColor: "rgba(153, 102, 255, 0.6)",
    },
    gridPosition: "2/3", //2nd column and 3rd row
    order: 1,
    priority: 1,
    value: [],
  },
];

export { widgets };
