import React, { useState } from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
    render: (dob) => {
      return dob.slice(0, 10)
    }
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
  const router = useRouter();
  const [selectionType, setSelectionType] = useState('checkbox');

  let newData;
  if(props.dataTable.length > 0) {
    newData = props.dataTable.map((e) => {
      // console.log(e, `<<< e`);
      return e = {
        ...e,
        'key' : e.id
      }
    });
  }
  return (
      <Table 
        style={{ cursor: 'pointer' }}
        pagination={{ 
          pageSize: 3, 
          responsive: true, 
          position: ['bottomCenter'] 
        }} 
        columns={columns} 
        dataSource={newData} 
        onChange={onChange} 
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => { 
                console.log(record, `< record`);
                let name = record.name.toLowerCase();
                name = name.split(' ').join('-');
                router.push(`/profile/${name}`)
            }, 
          };
        }}
      />
  )
};
export default App;