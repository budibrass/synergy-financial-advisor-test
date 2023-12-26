import React, { useEffect } from 'react';
import { Card, Typography, Flex, theme, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import {
  useLazyGetAllClientsQuery,
  useLazyGetClientProfileQuery,
} from '@/lib/services';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setClientList, setIsloading, setClientProfile } from '@/lib/slices';

const { Text } = Typography;
const { useToken } = theme;

const ErrorFetching = () => {
  const router = useRouter();
  const { token } = useToken();
  const [
    triggerClientList,
    {
      isSuccess: isSuccessClientList,
      isLoading: isLoadingClientList,
      isError: isErrorClientList,
      data: dataClientList,
    },
  ] = useLazyGetAllClientsQuery();

  const [
    triggerClientProfile,
    {
      isSuccess: isSuccessClientProfile,
      isLoading: isLoadingClientProfile,
      isError: isErrorClientProfile,
      data: dataClientProfile,
    },
  ] = useLazyGetClientProfileQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsloading(isLoadingClientList));
  }, [dispatch, isLoadingClientList]);

  useEffect(() => {
    dispatch(setIsloading(isLoadingClientProfile));
  }, [dispatch, isLoadingClientProfile]);

  useEffect(() => {
    if (
      isSuccessClientList &&
      Array.isArray(dataClientList) &&
      !isErrorClientList
    ) {
      dispatch(setClientList(dataClientList));
    }
  }, [dataClientList, dispatch, isErrorClientList, isSuccessClientList]);

  useEffect(() => {
    if (
      isSuccessClientProfile &&
      Object.keys(dataClientProfile).length &&
      !isErrorClientProfile
    ) {
      dispatch(setClientProfile(dataClientProfile));
    }
  }, [
    dataClientProfile,
    dispatch,
    isErrorClientProfile,
    isSuccessClientProfile,
  ]);

  return (
    <Card
      style={{
        height: '475px',
        background: '#FFE4E8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex vertical>
        <Flex
          vertical
          gap='small'
          align='center'
          style={{ textAlign: 'center' }}
        >
          <WarningOutlined
            style={{
              color: token.colorErrorText,
              fontSize: '32px',
              marginBottom: '2rem'
            }}
          />

          <Text
            style={{
              color: token.colorErrorText,
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Opps! Unable to load clients
          </Text>
          <Text style={{ color: token.colorErrorText }}>
            Something went wrong that we didn&apos;t anticipate.
          </Text>
          <Button
            onClick={() => {
              if (Object.hasOwn(router.query, 'name')) {
                triggerClientProfile();
              } else {
                triggerClientList();
              }
            }}
            size='large'
            style={{ marginTop: '1rem' }}
          >
            Retry
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ErrorFetching;
