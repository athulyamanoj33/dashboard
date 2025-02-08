import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  data: [],  
  filters: {
    dateRange: { start: '', end: '' }, 
    category: '', 
  },
  preferences: {
    theme: 'light', 
  },
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
  lineChartData: [], 
  barChartData: [],  
};


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
