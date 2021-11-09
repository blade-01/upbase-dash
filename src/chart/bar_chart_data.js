export const barChartData = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Portfolio",
        data: [290, 890, 450, 900, 79, 82, 27, 14, 230, 290, 330, 120],
        backgroundColor: "#0525f7",
        borderRadius: "5px",
      },
      {
        label: "Dollar",
        data: [166, 21, 300, 323, 954, 285, 662, 51, 900, 79, 82, 27],
        backgroundColor: "#87d1f3",
        borderRadius: 5,
      },
      {
        label: "EFTs",
        data: [
          0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514, 79, 82,
          27, 55,
        ],
        backgroundColor: "#fb5253",
        borderRadius: 5,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    maintainAspectRatio: false,
  },
};

export default barChartData;
