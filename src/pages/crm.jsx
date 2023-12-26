'use client';
import React, { useEffect } from 'react';
import CrmFetchData from '@/components/CrmFetchData';
import Loading from '@/components/Loading';
import LayoutPage from '@/components/LayoutPage';
import {
  useGetAllClientsQuery,
  getAllClients,
  useLazyGetAllClientsQuery,
} from '@/lib/services';
import { wrapper } from '@/lib/store';
import ErrorFetching from '@/components/ErrorFetching';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Crm = ({ clientList }) => {
  return (
    <LayoutPage>
      {<CrmFetchData dataTable={clientList} isError={!clientList.length} />}
    </LayoutPage>
  );
};

export default Crm;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const { data: clientList } = await store.dispatch(getAllClients.initiate());

    return { props: { clientList: clientList || [] } };
  }
);
