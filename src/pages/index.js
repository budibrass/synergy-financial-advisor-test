"use client";
import React, { useEffect, useState } from "react";
import {
  // Spin,
  Layout,
  Button,
  Input,
  Dropdown, 
  Space,
  Checkbox
} from "antd";
import {
  PlusCircleOutlined
} from "@ant-design/icons";
import TableData from "../components/Table";
import Navbar from "@/components/Navbar";
import CrmFetchData from "@/components/CrmFetchData";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "@/reducer/user";
import Loading from "@/components/Loading";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.user.data);
  const isLoading = useSelector(state => state.user.isLoading);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
    {isLoading ? <Loading /> : <Layout className="container" style={{ minHeight: "100vh" }}>
      <Navbar />
      <CrmFetchData dataTable={data} />
    </Layout>}
    </>
    
  );
};

export default App;