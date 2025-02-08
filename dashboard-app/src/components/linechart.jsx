import  { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useDispatch, useSelector } from 'react-redux';
import { setLineChartData } from '../features/dashboard/dashboardSlice';
import { fetchMockLineChartData } from '../utils/mockData';

const LineChart = () => {
  const dispatch = useDispatch();
  
  // Access the line chart data from the Redux store
  const lineChartData = useSelector((state) => state.dashboard.lineChartData);

  // Fetch line chart data when the component mounts
  useEffect(() => {
    const fetchedData = fetchMockLineChartData();
    dispatch(setLineChartData(fetchedData));
  }, [dispatch]);

  // Filter and prepare the data for plotting
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
    responsive: true,  // Make the chart responsive
  };

  const chartData = [trace1, trace2];

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Plot
        data={chartData}
        layout={layout}
        useResizeHandler={true}  // This ensures the chart resizes properly
        style={{ width: '100%', height: '100%' }}  // Make sure it fills the parent container
      />
    </div>
  );
};

export default LineChart;
