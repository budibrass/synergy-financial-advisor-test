import React from "react";
import {
  Layout,
  Divider,
  Typography,
  Tabs,
  Button,
  Input,
  Dropdown,
  Space,
  Checkbox,
  Row,
  Col,
  Card
} from "antd";
import { PlusCircleOutlined, WarningOutlined } from "@ant-design/icons";
import ErrorFetching from "./ErrorFetching";
import SuccessFetchingData from "./SuccessFetchingData";

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const onChange = (key) => {
  console.log(key);
};

const itemsDropdown = [
  {
    key: "1",
    label: "Client",
    children: (
      // ERROR CARD
      // <ErrorFetching />

      // FETCH Data
      <SuccessFetchingData />
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

const CrmFetchData = () => {
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
