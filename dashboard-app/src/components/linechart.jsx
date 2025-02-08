import  { useEffect } from 'react';
import Plot from 'react-plotly.js'; 
import { useDispatch, useSelector } from 'react-redux';
import { setLineChartData } from '../features/dashboard/dashboardSlice'; 
import { fetchMockLineChartData } from '../utils/mockData'; 

const LineChart = () => {
  const dispatch = useDispatch();
  
  
  const lineChartData = useSelector((state) => state.dashboard.lineChartData);

  useEffect(() => {

    const fetchedData = fetchMockLineChartData();
    dispatch(setLineChartData(fetchedData));
  }, [dispatch]);

  // Format the data for Plotly
  const category1 = lineChartData.filter(item => item.category === 'Category 1');
  const category2 = lineChartData.filter(item => item.category === 'Category 2');

  const trace1 = {
    x: category1.map(item => item.date),
    y: category1.map(item => item.value),
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Category 1',
  };

  const trace2 = {
    x: category2.map(item => item.date),
    y: category2.map(item => item.value),
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Category 2',
  };

  const layout = {
    title: 'Line Chart with Plotly',
    xaxis: {
      title: 'Date',
    },
    yaxis: {
      title: 'Value',
    },
    showlegend: true,
  };

  const chartData = [trace1, trace2];

  return <Plot data={chartData} layout={layout} />;
};

export default LineChart;
