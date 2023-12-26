'use client';

import React from 'react';
import { Typography, Divider } from 'antd';
import { useRouter } from 'next/router';
import DetailProfileCilents from '@/components/DetailProfileCilents';
import LayoutPage from '@/components/LayoutPage';
import { getClientProfile } from '@/lib/services';
import { wrapper } from '@/lib/store';
import Loading from '@/components/Loading';
import ErrorFetching from '@/components/ErrorFetching';
import { useSelector } from 'react-redux';

const ProfileDetail = ({ clientProfile }) => {
  const { Title } = Typography;
  const router = useRouter();
  const { name } = router.query;

  const { clientProfile: clientProfileStore, isLoading } = useSelector(
    (state) => state.acmeStore
  );

  let data = [];
  if (Object.keys(clientProfile).length) {
    data = clientProfile;
  } else if (Object.keys(clientProfileStore).length) {
    data = clientProfileStore;
  }

  return (
    <LayoutPage>
      {isLoading && <Loading />}
      {!Object.keys(data).length && (
        <>
          <Title level={2} style={{ color: "black", paddingTop: "10px" }}>
          {name}
          </Title>
          <Divider />
          <ErrorFetching />
        </>
      )}
      {Object.keys(data).length ? (
        <DetailProfileCilents name={name} data={data} />
      ) : null}
    </LayoutPage>
  );
};

export default ProfileDetail;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { data: clientProfile } = await store.dispatch(
      getClientProfile.initiate()
    );

    return { props: { clientProfile: clientProfile || [] } };
  }
);
