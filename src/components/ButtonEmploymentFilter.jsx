import React, { useState } from "react";
import { Button, Dropdown, Space, Checkbox } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const ButtonEmploymentFilter = (props) => {
  const [filterEmploymentParams, setFilterEmploymentparams] = useState({ Unemployed: false, Employed: false })

  const items = [
      {
        label: <Checkbox onClick={() => setFilterEmploymentparams({
          ...filterEmploymentParams,
          Unemployed: !filterEmploymentParams.Unemployed
        })}>Unemployed</Checkbox>,
        key: "0",
      },
      {
        label: <Checkbox onClick={() => setFilterEmploymentparams({
          ...filterEmploymentParams,
          Employed: !filterEmploymentParams.Employed
        })}>Employed</Checkbox>,
        key: "1",
      }
  ];

  if(props.filterEmploymentParams) {
    props.filterEmploymentParams(filterEmploymentParams)
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
            Employment
          </Space>
        </a>
      </Dropdown>
    </Button>
  );
}

export default ButtonEmploymentFilter