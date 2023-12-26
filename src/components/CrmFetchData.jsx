import React from 'react';
import { Layout, Divider, Typography, Tabs } from 'antd';
import ErrorFetching from './ErrorFetching';
import SuccessFetchingData from './SuccessFetchingData';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const { Content } = Layout;
const { Title } = Typography;

const CrmFetchData = ({ isError, dataTable }) => {
  const { clientList, isLoading } = useSelector((state) => state.acmeStore);

  const onChange = (key) => {
    console.log(key);
  };

  let data = [];
  if (dataTable.length) {
    data = dataTable;
  } else if (clientList.length) {
    data = clientList;
  }

  const itemsDropdown = [
    {
      key: '1',
      label: 'Client',
      children: (
        <>
          {isLoading && <Loading />}
          {isError && !clientList.length ? (
            <ErrorFetching />
          ) : (
            <SuccessFetchingData dataTable={data} />
          )}
        </>
      ),
    },
    {
      key: '2',
      label: 'Policy',
      children: 'Policy Tabs',
    },
    {
      key: '3',
      label: 'Support',
      children: 'Support Tabs',
    },
  ];

  return (
    <Content>
      <div
        className='pageHeader'
        style={{
          top: '102px',
          height: '59px',
          gap: '20px',
          border: '20px',
        }}
      >
        <Title level={4} style={{ color: 'black', paddingTop: '10px' }}>
          CRM
        </Title>
        <Divider />
      </div>

      <div className='tabs'>
        <Tabs
          style={{ height: '36px' }}
          defaultActiveKey='1'
          items={itemsDropdown}
          onChange={onChange}
        />
      </div>
    </Content>
  );
};

export default CrmFetchData;
