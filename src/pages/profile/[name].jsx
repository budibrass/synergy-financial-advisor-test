import React from 'react';
import Navbar from '@/components/Navbar';
import NotFound from '@/components/NotFound';
import { Layout } from 'antd';
import { useRouter } from 'next/router';
import DetailProfileCilents from '@/components/DetailProfileCilents';

const ProfileDetail = () => {
    const router = useRouter();
    const { name } = router.query;
  return (
    <Layout className="container" style={{ minHeight: "130vh" }} >
      <Navbar />
      <DetailProfileCilents profielName={name} />
    </Layout>
  )
}

export default ProfileDetail