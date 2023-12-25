import React from "react";
import {
  Layout,
  Divider,
  Typography,
  Tabs,
  Input,
} from "antd";
import ErrorFetching from "./ErrorFetching";
import SuccessFetchingData from "./SuccessFetchingData";

const { Content } = Layout;
const { Title } = Typography;

const CrmFetchData = (props) => {
  const onChange = (key) => {
    console.log(key);
  };
  
  const itemsDropdown = [
    {
      key: "1",
      label: "Client",
      children: (
        props.dataTable.length > 0 ?  <SuccessFetchingData dataTable={props.dataTable} /> : <ErrorFetching />
      ),
    },
    {
      key: "2",
      label: "Policy",
      children: "Policy Tabs",
    },
    {
      key: "3",
      label: "Support",
      children: "Support Tabs",
    },
  ];

  return (
    <Content style={{ background: "#ffffff", padding: "0 48px" }}>
      <div
        className="pageHeader"
        style={{
          top: "102px",
          height: "59px",
          // left: '112px',
          gap: "20px",
          border: "20px",
          // background: "brown",
          // borderRadius: "20px"
        }}
      >
        <Title level={4} style={{ color: "black", paddingTop: "10px" }}>
          CRM
        </Title>
        <Divider />
      </div>

      <div className="tabs">
        <Tabs
          style={{ height: "36px" }}
          defaultActiveKey="1"
          items={itemsDropdown}
          onChange={onChange}
        />
      </div>
    </Content>
  );
};

export default CrmFetchData;
