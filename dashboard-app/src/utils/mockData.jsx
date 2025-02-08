
export const fetchMockData = () => {
    return [
      { key: '1', name: 'John Doe', value: 123, category: 'A', date: '2025-01-15' },
      { key: '2', name: 'Jane Smith', value: 456, category: 'B', date: '2025-01-16' },
      { key: '3', name: 'Bob Johnson', value: 789, category: 'A', date: '2025-01-17' },
      { key: '4', name: 'Alice Brown', value: 101, category: 'C', date: '2025-01-18' },
      { key: '5', name: 'Charlie White', value: 202, category: 'B', date: '2025-01-19' },
      { key: '6', name: 'David Green', value: 303, category: 'A', date: '2025-02-01' },
      { key: '7', name: 'Eva Black', value: 404, category: 'C', date: '2025-02-02' },
    ];
  };
  



export const fetchMockLineChartData = () => {
    return [
      { date: '2021-01-01', value: 20, category: 'Category 1' },
      { date: '2021-02-01', value: 40, category: 'Category 1' },
      { date: '2021-03-01', value: 30, category: 'Category 1' },
      { date: '2021-01-01', value: 15, category: 'Category 2' },
      { date: '2021-02-01', value: 25, category: 'Category 2' },
      { date: '2021-03-01', value: 35, category: 'Category 2' },
    ];
  };

export const fetchMockBarChartData = () => {
    return [
      { category: 'Category 1', value: 10 },
      { category: 'Category 2', value: 15 },
      { category: 'Category 3', value: 7 },
      { category: 'Category 4', value: 12 },
    ];
  };
  
  