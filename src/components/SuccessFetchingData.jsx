import React, { useState } from 'react';
import { Input, Flex, Row, Col } from 'antd';
import TableData from '../components/Table';
import ButtonGenderFilter from './ButtonGenderFilter';
import ButtonMaritalStatus from './ButtonMaritalStatus';
import ButtonEmploymentFilter from './ButtonEmploymentFilter';
import { createStyles } from 'antd-style';

const { Search } = Input;

const useStyles = createStyles(({ token, css }) => ({
  filterContainer: css`
    margin-bottom: 1rem;
  `,
}));

const SuccessFetchingData = (props) => {
  const [searchParams, setSearchParams] = useState('');
  const [genderParams, setGenderParams] = useState({});
  const [statusParams, setStatusParams] = useState({});
  const [employmentParams, setEmploymentParams] = useState({});

  const { styles } = useStyles();

  const onSearch = (e) => {
    setSearchParams(e.target.value);
  };

  const getValueGender = (value) => {
    setGenderParams(value);
  };

  const getValueStatus = (value) => {
    setStatusParams(value);
  };

  const getValueEmployment = (value) => {
    setEmploymentParams(value);
  };

  return (
    <div>
      <Row gutter={[24, 8]} className={styles.filterContainer}>
        <Col xs={24} md={10}>
          <Search
            placeholder='Search by name'
            allowClear
            className={styles.search}
            onChange={onSearch}
          />
        </Col>
        <Col xs={24} md={14}>
          <Flex gap='small' wrap='wrap'>
            <ButtonGenderFilter filterGenderParams={getValueGender} />
            <ButtonMaritalStatus filterStatusParams={getValueStatus} />
            <ButtonEmploymentFilter
              filterEmploymentParams={getValueEmployment}
            />
          </Flex>
        </Col>
      </Row>
      <TableData
        employmentParams={employmentParams}
        statusParams={statusParams}
        genderParams={genderParams}
        searchParams={searchParams}
        dataTable={props.dataTable}
      />
    </div>
  );
};

export default SuccessFetchingData;
