import React from 'react';
import { Layout, Typography, Button, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';
import { useRouter } from 'next/router';

const useStyles = createStyles(({ token, css }) => ({
  container: css`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  buttonContainer: css`
    margin-top: 2rem;
  `,
  button: css`
    height: 56px !important;
    font-size: 500;
  `,
  title: css`
    color: ${token.colorPrimaryText};
    font-weight: 500;
  `,
  content: css`
    font-size: 3rem;
    font-weight: 500;
  `,
  description: css`
    font-size: 18px;
    font-weight: 300;
  `,
}));

const { Content } = Layout;
const { Text } = Typography;

export default function NotFound() {
  const { styles } = useStyles();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Space size='small' direction='vertical'>
        <Text className={styles.title}>404 error</Text>
        <Text className={styles.content}>We can&apos;t find that page</Text>
        <Text className={styles.description}>
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </Text>
        <Space className={styles.buttonContainer} size='middle'>
          <Button
            onClick={() => {
              router.back();
            }}
            type='default'
            icon={<ArrowLeftOutlined />}
            size={'large'}
            className={styles.button}
          >
            Go back
          </Button>
          <Button
            onClick={() => router.push('/')}
            type='primary'
            size={'large'}
            className={styles.button}
          >
            Take me home
          </Button>
        </Space>
      </Space>
    </div>
  );
}
