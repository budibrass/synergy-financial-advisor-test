import React from "react";
import { Avatar, Col, Menu, Row, Layout } from "antd";
import {
  BellOutlined,
  SettingOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../assets/images/logo.svg";
import Image from "next/image";

const { Header } = Layout;

function Navbar() {
  return (
    <Header
      className="header"
      style={{
        background: "#ffffff",
        height: "72px",
        position: "sticky",
        top: 0,
        zIndex: 1
      }}
    >
      <Row>
        <Col span={21} style={{ display: "flex", alignItems: "center" }}>
          <Image src={logo} alt="logo" />
          <Menu
            style={{
              height: "72px",
              alignItems: "center",
              width: '100%'
            }}
            mode="horizontal"
            items={[
              {
                label: "Acme Corp",
                key: "acmeCorp",
              },
              {
                label: "Dashboard",
                key: "dashboard",
              },
              {
                label: "CRM",
                key: "crm",
              },
              {
                label: "Submission",
                key: "submission",
              },
              {
                label: "Commission",
                key: "commission",
              },
              {
                label: "LMS",
                key: "lms",
              },
            ]}
          ></Menu>
        </Col>
        <Col
          span={3}
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            border: "20px",
          }}
        >
          <SearchOutlined style={{ color: "black", fontSize: "16px" }} />
          <SettingOutlined style={{ color: "black", fontSize: "16px" }} />
          <BellOutlined style={{ color: "black", fontSize: "16px" }} />
          <Avatar icon={<UserOutlined />} />
        </Col>
      </Row>
    </Header>
  );
}

export default Navbar;
