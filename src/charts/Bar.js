import Bar from "@ant-design/charts/es/bar";
import Column from "@ant-design/charts/es/column";

const BarChart = () => {
  var data = [
    {
      date: "1/7/2021",
      amount: 38,
    },
    {
      date: "2/7/2021",
      amount: 52,
    },
    {
      date: "3/7/2021",
      amount: 61,
    },
    {
      date: "4/7/2021",
      amount: 145,
    },
    {
      date: "5/7/2021",
      amount: 48,
    },
    {
      date: "6/7/2021",
      amount: 38,
    },
    {
      date: "7/7/2021",
      amount: 38,
    },
    {
      date: "8/7/2021",
      amount: 38,
    },
    {
      date: "9/7/2021",
      amount: 38,
    },
    {
      date: "10/7/2021",
      amount: 52,
    },
    {
      date: "11/7/2021",
      amount: 61,
    },
    {
      date: "12/7/2021",
      amount: 145,
    },
    {
      date: "13/7/2021",
      amount: 48,
    },
    {
      date: "14/7/2021",
      amount: 38,
    },
    {
      date: "15/7/2021",
      amount: 38,
    },
    {
      date: "16/7/2021",
      amount: 38,
    },
    {
      date: "17/7/2021",
      amount: 38,
    },
    {
      date: "18/7/2021",
      amount: 38,
    },
  ];
  var config = {
    data: data,
    xField: "date",
    yField: "amount",
    legend: { position: "top-left" },
    barBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
    interactions: [
      {
        date: "active-region",
        enable: false,
      },
    ],
  };
  var config2 = {
    data: data,
    xField: "amount",
    yField: "date",
    legend: { position: "top-left" },
    barBackground: { style: { fill: "rgba(0,0,0,0.1)" } },
    interactions: [
      {
        date: "active-region",
        enable: false,
      },
    ],
  };
  return (
    <>
      <Column {...config} style={{ marginBottom: "80px" }} />
      <Bar {...config2} style={{ minHeight: "700px" }} />
    </>
  );
};

export default BarChart;
