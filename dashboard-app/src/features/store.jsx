import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './fea/dashboardSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});