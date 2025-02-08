import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { useDispatch, useSelector } from "react-redux";
import { setLineChartData } from "../features/dashboard/dashboardSlice";
import { fetchMockLineChartData } from "../utils/mockData";

const LineChart = () => {
  const dispatch = useDispatch();

  const lineChartData = useSelector((state) => state.dashboard.lineChartData);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchedData = fetchMockLineChartData();
    dispatch(setLineChartData(fetchedData));

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const category1 = lineChartData.filter(
    (item) => item.category === "Category 1"
  );
  const category2 = lineChartData.filter(
    (item) => item.category === "Category 2"
  );

  const trace1 = {
    x: category1.map((item) => item.date),
    y: category1.map((item) => item.value),
    type: "scatter",
    mode: "lines+markers",
    name: "Category 1",
  };

  const trace2 = {
    x: category2.map((item) => item.date),
    y: category2.map((item) => item.value),
    type: "scatter",
    mode: "lines+markers",
    name: "Category 2",
  };

  const layout = {
    title: "Line Chart with Plotly",
    xaxis: {
      title: "Date",
    },
    yaxis: {
      title: "Value",
    },
    showlegend: true,
    autosize: true,
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
    },
    responsive: true,
  };

  if (screenWidth <= 600) {
    layout.margin = {
      l: 30,
      r: 30,
      b: 40,
      t: 40,
    };
  }

  const chartData = [trace1, trace2];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Plot
        data={chartData}
        layout={layout}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LineChart;
