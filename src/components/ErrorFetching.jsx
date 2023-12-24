import React from 'react';
import { Card, Row, Col } from 'antd';
import { WarningOutlined } from "@ant-design/icons";

const ErrorFetching = () => {
  return (
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
  )
}

export default ErrorFetching