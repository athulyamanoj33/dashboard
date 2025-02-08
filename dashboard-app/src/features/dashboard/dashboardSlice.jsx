import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  data: [],  
  filters: {
    dateRange: { start: '', end: '' }, // Filter by date range
    category: '',  // Filter by category
  },
  preferences: {
    theme: 'light',  // Default theme
  },
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
  lineChartData: [], // Store data for the line chart
  barChartData: [],  // Store data for the bar chart
};

// Create the slice
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setPreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    setLineChartData: (state, action) => {
      state.lineChartData = action.payload;
    },
    setBarChartData: (state, action) => {
      state.barChartData = action.payload;
    },
  },
});


export const { setData, setFilters, setPreferences, setPagination, setLineChartData, setBarChartData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
