import React, { useState } from "react";
import { Button, Dropdown, Space, Checkbox } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const ButtonGenderFilter = (props) => {
  const [filterGenderParams, setFilterGenderparams] = useState({ male: false, female: false })
  const items = [
    {
      label: <Checkbox onClick={() => setFilterGenderparams({
        ...filterGenderParams,
        male: !filterGenderParams.male
      })}>Male</Checkbox>,
      key: "0",
    },
    {
      label: <Checkbox onClick={() => setFilterGenderparams({
        ...filterGenderParams,
        female: !filterGenderParams.female
      })}>Female</Checkbox>,
      key: "1",
    },
  ];

  if(props.filterGenderParams) {
    props.filterGenderParams(filterGenderParams)
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
            Gender
          </Space>
        </a>
      </Dropdown>
    </Button>
  );
};

export default ButtonGenderFilter;
