import React, { useState } from "react";
import { Button, Dropdown, Space, Checkbox } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const ButtonMaritalStatus = (props) => {
  const [filterStatusParams, setFilterStatusParams] = useState({ Single: false, Married: false, Divorced: false })
    const items = [
        {
          label: <Checkbox onClick={() => setFilterStatusParams({
            ...filterStatusParams,
            Single: !filterStatusParams.Single
          })}>Single</Checkbox>,
          key: "0",
        },
        {
          label: <Checkbox onClick={() => setFilterStatusParams({
            ...filterStatusParams,
            Married: !filterStatusParams.Married
          })}>Married</Checkbox>,
          key: "1",
        },
        {
          label: <Checkbox onClick={() => setFilterStatusParams({
            ...filterStatusParams,
            Divorced: !filterStatusParams.Divorced
          })}>Divorced</Checkbox>,
          key: "2",
        },
    ];

    if(props.filterStatusParams) {
      props.filterStatusParams(filterStatusParams)
    }
    
    return (
        <Button
          style={{
            borderRadius: "16px",
            background: "#F9FAFB",
            marginRight: "10px",
          }}
        >
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <PlusCircleOutlined />
                Marital Status
              </Space>
            </a>
          </Dropdown>
        </Button>
    );
}

export default ButtonMaritalStatus