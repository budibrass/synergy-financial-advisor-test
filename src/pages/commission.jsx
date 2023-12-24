import React from 'react';
import Navbar from '@/components/Navbar';
import NotFound from '@/components/NotFound';
import { Layout } from 'antd';

const Commission = () => {
  return (
    <Layout className="container" style={{ minHeight: "100vh" }} >
      <Navbar />
      <NotFound />
    </Layout>
  )
}

export default Commission