import React, { useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setFilters, setPagination } from '../features/dashboard/dashboardSlice';
import { fetchMockData } from '../utils/mockData';

const DataTable: React.FC = () => {
  const dispatch = useDispatch();
  
  // Access data, filters, and pagination from Redux state
  const { data, filters, pagination } = useSelector((state: any) => state.dashboard);

  useEffect(() => {
    // Simulate fetching data and set it to Redux state
    const fetchedData = fetchMockData();
    dispatch(setData(fetchedData));
  }, [dispatch]);

  const handleDateRangeChange = (value: { start: string; end: string }) => {
    dispatch(setFilters({ dateRange: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ category: e.target.value }));
  };

  const handlePageChange = (page: number, pageSize: number) => {
    dispatch(setPagination({ currentPage: page, pageSize }));
  };

  // Slice data for pagination
  const paginatedData = data.slice(
    (pagination.currentPage - 1) * pagination.pageSize,
    pagination.currentPage * pagination.pageSize
  );

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Value', dataIndex: 'value', key: 'value' },
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Filter by category"
          value={filters.category}  // Bind filter input to Redux state
          onChange={handleCategoryChange}
        />
        <Button onClick={() => handleDateRangeChange({ start: '2025-01-01', end: '2025-02-01' })}>
          Set Date Range
        </Button>
      </Space>
      <Table
        dataSource={paginatedData}
        columns={columns}
        pagination={{
          current: pagination.currentPage,
          pageSize: pagination.pageSize,
          total: data.length,
          onChange: handlePageChange,
        }}
        scroll={{ x: 'max-content' }} 
        rowKey="key"
      />
    </div>
  );
};

export default DataTable;
