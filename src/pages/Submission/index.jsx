import React from 'react';
import Navbar from '@/components/Navbar';
import NotFound from '@/components/NotFound';
import { Layout } from 'antd';

const Submission = () => {
  return (
    <Layout className="container" style={{ minHeight: "100vh" }} >
      <Navbar />
      <NotFound />
    </Layout>
  )
}

export default Submission