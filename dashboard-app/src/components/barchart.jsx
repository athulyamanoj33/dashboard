import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { useDispatch, useSelector } from "react-redux";
import { setBarChartData } from "../features/dashboard/dashboardSlice";
import { fetchMockBarChartData } from "../utils/mockData";

const BarChart = () => {
  const dispatch = useDispatch();
  const barChartData = useSelector((state) => state.dashboard.barChartData);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchedData = fetchMockBarChartData();
    dispatch(setBarChartData(fetchedData));

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const categories = barChartData.map((item) => item.category);
  const values = barChartData.map((item) => item.value);

  const data = [
    {
      type: "bar",
      x: categories,
      y: values,
      marker: { color: "rgb(158,202,225)" },
    },
  ];

  const layout = {
    title: "Simple Bar Chart",
    xaxis: {
      title: "Categories",
    },
    yaxis: {
      title: "Values",
    },
    autosize: true,
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
    },
    responsive: true,
  };

  const chartStyles = {
    container: {
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    plot: {
      width: "100%",
      height: "100%",
    },
  };

  if (screenWidth <= 600) {
    layout.margin = {
      l: 30,
      r: 30,
      b: 40,
      t: 40,
    };
  }

  return (
    <div style={chartStyles.container}>
      <Plot data={data} layout={layout} style={chartStyles.plot} />
    </div>
  );
};

export default BarChart;
