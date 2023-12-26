import React, { useState } from 'react';
import { Table } from 'antd';
import { useRouter } from 'next/navigation';

const App = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filteredValue: [props.searchParams],
      onFilter: (value, record) => {
        return record.name.includes(value);
      },
      sorter: (a, b) => a.name.length - b.name.length,
      fixed: 'left',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filteredValue:
        props.genderParams.male && !props.genderParams.female
          ? ['Male']
          : !props.genderParams.male && props.genderParams.female
          ? ['Female']
          : [''],
      onFilter: (value, record) => {
        return record.gender.includes(value);
      },
      sorter: (a, b) => a.gender.length - b.gender.length,
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      onFilter: (value, record) => record.dob.indexOf(value) === 0,
      render: (dob) => {
        return dob.slice(0, 10);
      },
    },
    {
      title: 'Marital Status',
      dataIndex: 'maritalStatus',
      filteredValue:
        props.statusParams.Single &&
        !props.statusParams.Married &&
        !props.statusParams.Divorced
          ? ['Single']
          : props.statusParams.Single &&
            props.statusParams.Married &&
            !props.statusParams.Divorced
          ? ['Single', 'Married']
          : props.statusParams.Single &&
            !props.statusParams.Married &&
            props.statusParams.Divorced
          ? ['Single', 'Divorced']
          : !props.statusParams.Single &&
            props.statusParams.Married &&
            !props.statusParams.Divorced
          ? ['Married']
          : !props.statusParams.Single &&
            props.statusParams.Married &&
            props.statusParams.Divorced
          ? ['Married', 'Divorced']
          : !props.statusParams.Single &&
            !props.statusParams.Married &&
            props.statusParams.Divorced
          ? ['Divorced']
          : [''],
      onFilter: (value, record) => {
        return record.maritalStatus.includes(value);
      },
      sorter: (a, b) => a.maritalStatus.length - b.maritalStatus.length,
    },
    {
      title: 'Employment',
      dataIndex: 'employmentStatus',
      filteredValue:
        props.employmentParams.Employed && !props.employmentParams.Unemployed
          ? ['Employed']
          : !props.employmentParams.Employed &&
            props.employmentParams.Unemployed
          ? ['Unemployed']
          : [''],
      onFilter: (value, record) => {
        return record.employmentStatus.includes(value);
      },
      sorter: (a, b) => a.employmentStatus.length - b.employmentStatus.length,
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   'selectedRows: ',
      //   selectedRows
      // );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };

  const router = useRouter();
  const [selectionType, setSelectionType] = useState('checkbox');

  let newData;
  if (props.dataTable.length > 0) {
    newData = props.dataTable.map((e) => {
      return (e = {
        ...e,
        key: e.id,
      });
    });
  }
  return (
    <Table
      style={{ cursor: 'pointer' }}
      pagination={{
        pageSize: 3,
        responsive: true,
        position: ['bottomCenter'],
      }}
      columns={columns}
      dataSource={newData}
      onChange={onChange}
      scroll={{
        x: 600,
      }}
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            let name = record.name.toLowerCase();
            name = name.split(' ').join('-');
            router.push(`/profile/${name}`);
          },
        };
      }}
    />
  );
};
export default App;
