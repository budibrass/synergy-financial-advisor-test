import React, { useState } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  // {
  //   title: 'Age',
  //   dataIndex: 'age',
  //   // defaultSortOrder: 'descend',
  //   sorter: (a, b) => a.age - b.age,
  // },
  {
    title: 'Gender',
    dataIndex: 'gender',
    onFilter: (value, record) => record.gender.indexOf(value) === 0,
    sorter: (a, b) => a.gender.length - b.gender.length,
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
    onFilter: (value, record) => record.dob.indexOf(value) === 0,
    sorter: (a, b) => a.dob.length - b.dob.length,
  },
  {
    title: 'Marital Status',
    dataIndex: 'maritalStatus',
    onFilter: (value, record) => record.maritalStatus.indexOf(value) === 0,
    sorter: (a, b) => a.maritalStatus.length - b.maritalStatus.length,
  },
  {
    title: 'Employment',
    dataIndex: 'employmentStatus',
    onFilter: (value, record) => record.employmentStatus.indexOf(value) === 0,
    sorter: (a, b) => a.employmentStatus.length - b.employmentStatus.length,
  },
];

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '7',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '8',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
    
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = (props) => {
  console.log(props, `<< columns`);
  const [data, setData] = useState([]);
  // if(props.columns) {
  //   setData(props.columns)
  // };

  // console.log(data, `<<<<< data`);

    const [selectionType, setSelectionType] = useState('checkbox');
    return (
        <Table pagination={{ pageSize: 3, responsive: true, position: ['bottomCenter'] }} columns={columns} dataSource={props.dataTable} onChange={onChange} rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}/>
    )
};
export default App;