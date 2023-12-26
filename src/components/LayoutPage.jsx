import Navbar from '@/components/Navbar';
import { Layout, Row, Col, theme } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token, css }, { layout }) => ({
  layout: css`
    min-height: 100dvh;
    flex-direction: column !important;
    background-color: ${token.colorBgContainer};
  `,
  layoutContent: css`
    min-height: calc\(100dvh - ${layout.headerHeight}px\);
    background-color: ${token.colorBgBase};
  `,
}));

const { useToken } = theme;

export default function LayoutPage({ children }) {
  const { token } = useToken();
  const { styles } = useStyles({ layout: token.Layout });

  return (
    <Layout className={styles.layout}>
      <Navbar />
      <Layout.Content>
        <Row justify={'center'}>
          <Col xs={22} lg={20} className={styles.layoutContent}>
            {children}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
