import React from "react";
import {
  Avatar,
  Col,
  Row,
  Layout,
  Divider,
  Typography,
  Button,
  Input,
  Dropdown,
  Space,
  Checkbox,
} from "antd";
import {
  UserOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import TableData from "../components/Table";

const { Content } = Layout;
const { Text, Title } = Typography;
const { Search } = Input;

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

const DetailProfileCilents = () => {
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
          Nama Profile
        </Title>
        <Divider />

        <div
          style={{
            background: "#F9FAFB",
            height: "88px",
            borderRadius: "12px",
            padding: "20px, 24px, 20px, 24px",
            top: "191px",
            left: "112px",
            gap: "56px",
          }}
          className="DetailsProfile"
        >
          <div
            className="boxDetailProfile1"
            style={{
              height: "48px",
              gap: "8px",
              alignContent: "center",
            }}
          >
            <div
              style={{
                alignContent: "center",
                height: "100%",
                marginLeft: "20px",
              }}
            >
              <Row
                align={"bottom"}
                gutter={[16, 16]}
                style={{
                  color: "#667085",
                  height: "100%",
                  fontSize: "14px",
                  paddingBottom: "5px",
                }}
              >
                <Col>Gender</Col>
                <Col>DOB</Col>
                <Col>Marital Status</Col>
                <Col>Employment</Col>
              </Row>
              <Row
                align={"top"}
                gutter={[16, 16]}
                style={{ color: "#475467", height: "100%", fontSize: "14px" }}
              >
                <Col>Gender</Col>
                <Col>DOB</Col>
                <Col>Marital Status</Col>
                <Col>Employment</Col>
              </Row>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Text
            style={{ color: "#101828", lineHeight: "28px", fontSize: "18px" }}
          >
            Financials
          </Text>
          <Divider />
          <div style={{ marginBottom: "30px" }}>
            <div
              style={{
                height: "72px",
                border: "1px solid #EAECF0",
                borderRadius: "10px 10px 0px 0px",
                padding: "16px, 24px, 16px, 24px",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Text style={{ paddingLeft: "10px" }}>Income</Text>
              <Text style={{ paddingRight: "10px" }}>$890.098</Text>
            </div>
            <div
              style={{
                height: "72px",
                border: "1px solid #EAECF0",
                padding: "16px, 24px, 16px, 24px",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Text style={{ paddingLeft: "10px" }}>Income</Text>
              <Text style={{ paddingRight: "10px" }}>$890.098</Text>
            </div>
            <div
              style={{
                height: "72px",
                border: "1px solid #EAECF0",
                padding: "16px, 24px, 16px, 24px",
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Text style={{ paddingLeft: "10px" }}>Income</Text>
              <Text style={{ paddingRight: "10px" }}>$890.098</Text>
            </div>
          </div>

          <Text
            style={{ color: "#101828", lineHeight: "28px", fontSize: "18px" }}
          >
            Goals
          </Text>
          <Divider />
          <Row style={{ marginBottom: "30px" }}>
            <Col span={12} style={{ paddingRight: "10px" }}>
              <div
                style={{
                  // display: 'flex',
                  height: "96px",
                  // justifyContent: 'space-between',
                  border: "1px solid #EAECF0",
                  borderRadius: "12px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Col style={{ marginRight: "10px" }}>
                      <Avatar icon={<UserOutlined />} />
                    </Col>
                    <Col>
                      <div style={{ display: "grid" }}>
                        <Text>Emergency Fund</Text>
                        <Text>$345.432</Text>
                      </div>
                    </Col>
                  </div>
                  <Col style={{ marginRight: "10px" }}>
                    <Button>edit</Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12} style={{ paddingLeft: "10px" }}>
              <div
                style={{
                  // display: 'flex',
                  height: "96px",
                  // justifyContent: 'space-between',
                  border: "1px solid #EAECF0",
                  borderRadius: "12px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Col style={{ marginRight: "10px" }}>
                      <Avatar icon={<UserOutlined />} />
                    </Col>
                    <Col>
                      <div style={{ display: "grid" }}>
                        <Text>Emergency Fund</Text>
                        <Text>$345.432</Text>
                      </div>
                    </Col>
                  </div>
                  <Col style={{ marginRight: "10px" }}>
                    <Button>edit</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Text
            style={{ color: "#101828", lineHeight: "28px", fontSize: "18px" }}
          >
            Insurances
          </Text>
          <Divider />
          <Row>
            <Col span={12} style={{ paddingRight: "10px" }}>
              <div
                style={{
                  // display: 'flex',
                  height: "96px",
                  // justifyContent: 'space-between',
                  border: "1px solid #EAECF0",
                  borderRadius: "12px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Col style={{ marginRight: "10px" }}>
                      <Avatar icon={<UserOutlined />} />
                    </Col>
                    <Col>
                      <div style={{ display: "grid" }}>
                        <Text>Emergency Fund</Text>
                        <Text>$345.432</Text>
                      </div>
                    </Col>
                  </div>
                  <Col style={{ marginRight: "10px" }}>
                    <Button>edit</Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12} style={{ paddingLeft: "10px" }}>
              <div
                style={{
                  // display: 'flex',
                  height: "96px",
                  // justifyContent: 'space-between',
                  border: "1px solid #EAECF0",
                  borderRadius: "12px",
                }}
              >
                <Row
                  style={{
                    display: "flex",
                    marginLeft: "10px",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Col style={{ marginRight: "10px" }}>
                      <Avatar icon={<UserOutlined />} />
                    </Col>
                    <Col>
                      <div style={{ display: "grid" }}>
                        <Text>Emergency Fund</Text>
                        <Text>$345.432</Text>
                      </div>
                    </Col>
                  </div>
                  <Col style={{ marginRight: "10px" }}>
                    <Button>edit</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default DetailProfileCilents;
