import React from "react";
import { Button, Input, Dropdown, Space, Checkbox } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import TableData from "../components/Table";

const { Search } = Input;

const SuccessFetchingData = (props) => {
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

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        // onSearch={onSearch}
        style={{
          width: "320px",
          marginBottom: "10px",
          marginRight: "10px",
        }}
      />
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
              Gender
            </Space>
          </a>
        </Dropdown>
      </Button>
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
      <Button style={{ borderRadius: "16px", background: "#F9FAFB" }}>
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
      <TableData dataTable={props.dataTable} />
    </div>
  );
};

export default SuccessFetchingData;
