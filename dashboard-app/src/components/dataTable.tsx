import React, { useEffect, useState } from 'react';
import { Table, Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setFilters, setPagination } from '../features/dashboard/dashboardSlice';
import { fetchMockData } from '../utils/mockData';

const DataTable: React.FC = () => {
  const dispatch = useDispatch();
  const { data, filters, pagination } = useSelector((state: any) => state.dashboard);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchedData = fetchMockData();
    dispatch(setData(fetchedData));
  }, [dispatch]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ category: e.target.value }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    dispatch(setPagination({ currentPage: page, pageSize }));
  };

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    
  };

  const filteredData = data
    .filter((item) => {
      const matchesCategory = filters.category ? item.category.toString().includes(filters.category) : true;
      const matchesSearch = searchText ? item.name.toLowerCase().includes(searchText.toLowerCase()) : true;
      return matchesCategory && matchesSearch;
    });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      sorter: (a: any, b: any) => a.value - b.value,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sorter: (a: any, b: any) => a.category.localeCompare(b.category),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
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
        onChange={handleChange} // This will handle sorting and pagination changes
      />
    </div>
  );
};

export default DataTable;
