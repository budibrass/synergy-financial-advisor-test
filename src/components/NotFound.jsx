import React from "react";
import { Col, Row, Layout, Typography, Button, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Text } = Typography;
const NotFound = () => {
  return (
    <Content style={{ background: "#ffffff", padding: "0 48px" }}>
      <div
        style={{
          height: "100%",
          padding: "0px, 32px, 0px, 32px",
          gap: "32px",
          display: "flex",
        }}
      >
        <div
          className="headingContent404"
          style={{
            height: "162px",
            gap: "24px",
            margin: "auto",
            alignContent: "center",
            width: "100%",
          }}
        >
          <Row>
            <Col>
              <Text
                style={{
                  fontWeight: 600,
                  color: "#175CD3",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                404 error
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: "60px",
                  lineHeight: "72px",
                  letterSpacing: "-2%",
                }}
              >
                We can't find that page
              </Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text
                style={{
                  color: "grey",
                  fontWeight: 400,
                  // fontSize: '20px',
                  lineHeight: "30px",
                }}
              >
                Sorry, the page you are looking for doesn't exist or has been
                moved.
              </Text>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <Button
                style={{
                  width: "150px",
                  height: "50px",
                  borderRadius: "8px",
                  padding: "16px, 28px, 16px, 28px",
                  gap: "12px",
                  marginRight: "10px",
                }}
              >
                <ArrowLeftOutlined />
                Go Back
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                style={{
                  width: "150px",
                  height: "50px",
                  borderRadius: "8px",
                  padding: "16px, 28px, 16px, 28px",
                  gap: "12px",
                }}
              >
                Take me home
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default NotFound;
