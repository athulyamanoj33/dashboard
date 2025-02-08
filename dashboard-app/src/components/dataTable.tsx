import React, { useEffect, useState } from 'react';
import { Table, Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setFilters, setPagination } from '../features/dashboard/dashboardSlice';
import { fetchMockData } from '../utils/mockData';

const DataTable: React.FC = () => {
  const dispatch = useDispatch();
  
  // Access Redux state
  const { data, filters, pagination } = useSelector((state: any) => state.dashboard);

  // Local state for search input
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch data and set it in Redux store
    const fetchedData = fetchMockData();
    dispatch(setData(fetchedData));
  }, [dispatch]);

  // Handle category filter
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ category: e.target.value }));
  };

  // Handle search by name
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Handle pagination
  const handlePageChange = (page: number, pageSize: number) => {
    dispatch(setPagination({ currentPage: page, pageSize }));
  };

  // Apply filters
  const filteredData = data.filter((item) => {
    const matchesCategory = filters.category ? item.category.toString().includes(filters.category) : true;
    const matchesSearch = searchText ? item.name.toLowerCase().includes(searchText.toLowerCase()) : true;
    return matchesCategory && matchesSearch;
  });

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Value', dataIndex: 'value', key: 'value' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search by name"
          value={searchText}
          onChange={handleSearchChange}
        />
        <Input
          placeholder="Filter by category"
          value={filters.category}
          onChange={handleCategoryChange}
        />
      </Space>
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{
          current: pagination.currentPage,
          pageSize: pagination.pageSize,
          total: filteredData.length,
          onChange: handlePageChange,
        }}
        scroll={{ x: 'max-content' }} 
        rowKey="key"
      />
    </div>
  );
};

export default DataTable;
