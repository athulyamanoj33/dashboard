import  { useEffect } from 'react';
import Plot from 'react-plotly.js'; 
import { useDispatch, useSelector } from 'react-redux';
import { setBarChartData } from '../features/dashboard/dashboardSlice';
import { fetchMockBarChartData } from '../utils/mockData'; 

const BarChart = () => {
  const dispatch = useDispatch();
  
  const barChartData = useSelector((state) => state.dashboard.barChartData);

  useEffect(() => {

    const fetchedData = fetchMockBarChartData();
    dispatch(setBarChartData(fetchedData));
  }, [dispatch]);

  // Format the data for Plotly
  const categories = barChartData.map(item => item.category);
  const values = barChartData.map(item => item.value);

  const data = [
    {
      type: 'bar',
      x: categories, // Categories on the x-axis
      y: values, // Values for each category
      marker: { color: 'rgb(158,202,225)' }, 
    },
  ];


  const layout = {
    title: 'Simple Bar Chart',
    xaxis: {
      title: 'Categories',
    },
    yaxis: {
      title: 'Values',
    },
    autosize: true, 
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Plot data={data} layout={layout} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default BarChart;
