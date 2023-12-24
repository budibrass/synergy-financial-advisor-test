"use client";
import {
  Avatar,
  Col,
  Menu,
  Row,
  Layout,
  Divider,
  Typography,
  Tabs,
  Card,
  Button,
  Table,
  Input,
  Dropdown, 
  Space,
  Checkbox
} from "antd";
import {
  BellOutlined,
  SettingOutlined,
  SearchOutlined,
  UserOutlined,
  WarningOutlined,
  ArrowLeftOutlined,
  DownOutlined,
  PlusCircleOutlined
} from "@ant-design/icons";
import logo from "../assets/images/logo.svg";
import Image from "next/image";
import TableData from "../components/Table";
import Navbar from "@/components/Navbar";
import NotFound from "@/components/NotFound";
import DetailProfileCilents from "@/components/DetailProfileCilents";
import CrmFetchData from "@/components/CrmFetchData";

const { Content, Header } = Layout;
const { Text, Link, Title } = Typography;
const { Search } = Input;

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    label: 
    <Checkbox onClick={()=> console.log(`MASUK`)}>1st menu item</Checkbox>,
    key: '0',
  },
  {
    label: 
    <Checkbox onClick={()=> console.log(`MASUK`)}>2st menu item</Checkbox>,
    key: '1',
  },
  {
    label: 
    <Checkbox onClick={()=> console.log(`MASUK`)}>3st menu item</Checkbox>,
    key: '3',
  },
];


const itemsDropdown = [
  {
    key: "1",
    label: "Client",
    children: (
      // ERROR CARD
      // <Card
      //   style={{
      //     height: "475px",
      //     background: "#FFE4E8",
      //     textAlign: "center",
      //   }}
      // >
      //   <div>
      //     <Row justify={"center"}>
      //       <Col>
      //         <WarningOutlined
      //           style={{
      //             color: "red",
      //             fontSize: "16px",
      //             // margin: 'auto'
      //           }}
      //         />
      //       </Col>
      //     </Row>
      //     <Row justify={"center"}>
      //       <Col>Opps! Unable to load clients</Col>
      //     </Row>
      //     <Row justify={"center"}>
      //       <Col>Something went wrong that we didn't anticipate.</Col>
      //     </Row>
      //   </div>
      // </Card>

      // FETCH Data
      <div>
        <Search
          placeholder="input search text"
          allowClear
          // onSearch={onSearch}
          style={{
            width: "320px",
            marginBottom: '10px',
            marginRight: '10px'
          }}
        />
        <Button style={{ borderRadius: '16px', background: '#F9FAFB', marginRight: '10px' }}>
          <Dropdown
            menu={{
              items
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
              <PlusCircleOutlined />
                Gender
              </Space>
            </a>
          </Dropdown>
        </Button>
        <Button style={{ borderRadius: '16px', background: '#F9FAFB', marginRight: '10px' }}>
          <Dropdown
            menu={{
              items
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
              <PlusCircleOutlined />
                Marital Status
              </Space>
            </a>
          </Dropdown>
        </Button>
        <Button style={{ borderRadius: '16px', background: '#F9FAFB' }}>
          <Dropdown
            menu={{
              items
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
              <PlusCircleOutlined />
                Employment
              </Space>
            </a>
          </Dropdown>
        </Button>
        <TableData />
      </div>
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
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
];

const App = () => {
  return (
    <Layout className="container" style={{ minHeight: "100vh" }}>
      <Navbar />

      {/* CRM Start */}
      <CrmFetchData />
      {/* CRM End */}

      {/* 404 Not Found Start*/}
      {/* <NotFound /> */}
      {/* 404 Not End */}

      {/* Profile Clients Start */}
      {/* <DetailProfileCilents /> */}
      {/* Profile Clients End */}
    </Layout>
  );
};

export default App;