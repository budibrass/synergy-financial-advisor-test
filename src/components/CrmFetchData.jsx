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
import TableData from "../components/Table";

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    label: (
      <Checkbox onClick={() => console.log(`MASUK`)}>1st menu item</Checkbox>
    ),
    key: "0",
  },
  {
    label: (
      <Checkbox onClick={() => console.log(`MASUK`)}>2st menu item</Checkbox>
    ),
    key: "1",
  },
  {
    label: (
      <Checkbox onClick={() => console.log(`MASUK`)}>3st menu item</Checkbox>
    ),
    key: "3",
  },
];

const itemsDropdown = [
  {
    key: "1",
    label: "Client",
    children: (
      // ERROR CARD
      <Card
        style={{
          height: "475px",
          background: "#FFE4E8",
          textAlign: "center",
          margin: 'auto'
        }}
      >
        <div>
          <Row justify={"center"}>
            <Col>
              <WarningOutlined
                style={{
                  color: "brown",
                  fontSize: "16px",
                  // margin: 'auto'
                }}
              />
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col style={{ fontSize: '16px', color: '#89123E' }}>Opps! Unable to load clients</Col>
          </Row>
          <Row justify={"center"}>
            <Col style={{ fontSize: '14px', color: '#89123E' }}>Something went wrong that we didn't anticipate.</Col>
          </Row>
        </div>
      </Card>

      // FETCH Data
      // <div>
      //   <Search
      //     placeholder="input search text"
      //     allowClear
      //     // onSearch={onSearch}
      //     style={{
      //       width: "320px",
      //       marginBottom: "10px",
      //       marginRight: "10px",
      //     }}
      //   />
      //   <Button
      //     style={{
      //       borderRadius: "16px",
      //       background: "#F9FAFB",
      //       marginRight: "10px",
      //     }}
      //   >
      //     <Dropdown
      //       menu={{
      //         items,
      //       }}
      //       trigger={["click"]}
      //     >
      //       <a onClick={(e) => e.preventDefault()}>
      //         <Space>
      //           <PlusCircleOutlined />
      //           Gender
      //         </Space>
      //       </a>
      //     </Dropdown>
      //   </Button>
      //   <Button
      //     style={{
      //       borderRadius: "16px",
      //       background: "#F9FAFB",
      //       marginRight: "10px",
      //     }}
      //   >
      //     <Dropdown
      //       menu={{
      //         items,
      //       }}
      //       trigger={["click"]}
      //     >
      //       <a onClick={(e) => e.preventDefault()}>
      //         <Space>
      //           <PlusCircleOutlined />
      //           Marital Status
      //         </Space>
      //       </a>
      //     </Dropdown>
      //   </Button>
      //   <Button style={{ borderRadius: "16px", background: "#F9FAFB" }}>
      //     <Dropdown
      //       menu={{
      //         items,
      //       }}
      //       trigger={["click"]}
      //     >
      //       <a onClick={(e) => e.preventDefault()}>
      //         <Space>
      //           <PlusCircleOutlined />
      //           Employment
      //         </Space>
      //       </a>
      //     </Dropdown>
      //   </Button>
      //   <TableData />
      // </div>
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

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sydney No. 1 Lake Park",
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
