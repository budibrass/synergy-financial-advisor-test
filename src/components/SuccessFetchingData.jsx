import React, { useState } from "react";
import { Input } from "antd";
import TableData from "../components/Table";
import ButtonGenderFilter from "./ButtonGenderFilter";
import ButtonMaritalStatus from "./ButtonMaritalStatus";
import ButtonEmploymentFilter from "./ButtonEmploymentFilter";

const { Search } = Input;

const SuccessFetchingData = (props) => {
  const [searchParams, setSearchParams] = useState('');
  const [genderParams, setGenderParams] = useState({});
  const [statusParams, setStatusParams] = useState({});
  const [employmentParams, setEmploymentParams] = useState({});

  const onSearch = (e) => {
    setSearchParams(e.target.value);
  };

  const getValueGender = (value) => {
    setGenderParams(value)
  };

  const getValueStatus = (value) => {
    setStatusParams(value)
  };

  const getValueEmployment = (value) => {
    setEmploymentParams(value)
  };

  return (
    <div>
      <Search
        placeholder="Search by name"
        allowClear
        // onSearch={onSearch}
        onChange={onSearch}
        style={{
          width: "320px",
          marginBottom: "10px",
          marginRight: "10px",
        }}
      />
      <ButtonGenderFilter filterGenderParams={getValueGender} />
      <ButtonMaritalStatus filterStatusParams={getValueStatus} />
      <ButtonEmploymentFilter filterEmploymentParams={getValueEmployment} />
      <TableData employmentParams={employmentParams} statusParams={statusParams} genderParams={genderParams} searchParams={searchParams} dataTable={props.dataTable} />
    </div>
  );
};

export default SuccessFetchingData;
