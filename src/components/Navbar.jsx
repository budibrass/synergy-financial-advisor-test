import React, { useState } from 'react';
import {
  Avatar,
  Col,
  Row,
  Layout,
  Flex,
  Drawer,
  Button,
  Grid,
} from 'antd';
import {
  BellOutlined,
  SettingOutlined,
  SearchOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import logo from '../assets/images/logo.svg';
import Image from 'next/image';
import { createStyles } from 'antd-style';
import { useRouter } from 'next/router';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const useStyles = createStyles(({ token, css }) => ({
  header: css`
    border-bottom: 1px solid ${token.colorBorderSecondary};
    position: relative;
    z-index: 2222;
  `,
  logo: css`
    margin-right: 1.5rem;
    cursor: pointer;

    span {
      font-weight: 700;
      font-size: 18px;
    }

    img {
      width: 32px;
      height: 32px;
    }
  `,
  navigation: css`
    button {
      font-weight: 500;
      line-height: 16px;
    }
  `,
  navigationActive: css`
    background-color: ${token.colorFillSecondary};
  `,
  buttonMenu: css`
    width: 36px;
    height: 36px;
    padding: 0 !important;
    display: flex;
    align-items: center;
    background-color: transparent;
    box-shadow: none;

    border: 0;
    &:hover {
      background-color: ${token.colorFillSecondary};
    }

    span {
      font-size: 18px;
      color: ${token.colorTextSecondary};
      margin: auto;
    }
  `,

  buttonNavigation: css`
    button:last-child {
      margin-left: 1rem;
    }
  `,
  icons: css`
    font-size: 18px;
    color: ${token.colorTextSecondary};
  `,
  drawerNavigation: css`
    display: block;
    width: 100%;
    height: auto;
    text-align: start;
    border-radius: 0;
    border: 0;
    font-size: 18px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    &:hover {
      background-color: ${token.colorFillSecondary};
      color: ${token.colorTextSecondary} !important;
      border-color: transparent !important;
      border-radius: ${token.borderRadiusLG}px;
    }
  `,
  drawerCloseButton: css`
    width: 100%;
    text-align: end;

    button {
      width: 32px;
      height: 32px;
      padding: 0;

      &:hover {
        background-color: ${token.colorFillSecondary};
        border-color: ${token.colorBorderSecondary} !important;
        color: ${token.colorTextSecondary} !important;
      }
    }
  `,
  drawerNavigationActive: css`
    background-color: ${token.colorFillSecondary};
    border-radius: ${token.borderRadiusLG}px;
  `,
}));

const items = [
  {
    label: 'Dashboard',
    key: '/dashboard',
  },
  {
    label: 'CRM',
    key: '/crm',
  },
  {
    label: 'Submission',
    key: '/submission',
  },
  {
    label: 'Commission',
    key: '/commission',
  },
  {
    label: 'LMS',
    key: '/lms',
  },
];

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);

  const { styles, cx } = useStyles();

  const router = useRouter();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={styles.buttonMenu} onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer placement='right' closable={false} onClose={onClose} open={open}>
        <div className={styles.drawerCloseButton}>
          <Button onClick={onClose}>
            <CloseOutlined />
          </Button>
        </div>
        {items.map((item) => (
          <Button
            className={cx(
              styles.drawerNavigation,
              item.key === router.pathname && styles.drawerNavigationActive
            )}
            key={item.key}
            onClick={() => {
              onClose();
              if (item.key !== router.pathname) {
                router.push(item.key);
              }
            }}
          >
            <span>{item.label}</span>
          </Button>
        ))}
      </Drawer>
    </>
  );
};

function Navbar() {
  const router = useRouter();
  const { styles } = useStyles();
  const screens = useBreakpoint();

  return (
    <Header className={styles.header}>
      <Row justify='center' wrap={false}>
        <Col xs={22} lg={20}>
          <Flex>
            <Flex
              wrap='nowrap'
              gap='small'
              align='center'
              className={styles.logo}
              onClick={() => {
                router.push('/');
              }}
            >
              <Image src={logo} alt='logo' />
              <span>Acme Corp</span>
            </Flex>
            {screens.lg && (
              <Flex
                wrap='nowrap'
                align='center'
                flex='auto'
                gap='small'
                className={styles.navigation}
              >
                {items.map((item) => (
                  <Button
                    type='text'
                    key={item.key}
                    onClick={() => {
                      if (router.asPath !== item.key) {
                        router.push(item.key);
                      }
                    }}
                    className={
                      router.asPath === item.key
                        ? styles.navigationActive
                        : undefined
                    }
                  >
                    {item.label}
                  </Button>
                ))}
              </Flex>
            )}
            {screens.lg && (
              <Flex
                wrap='nowrap'
                align='center'
                gap='small'
                className={styles.buttonNavigation}
              >
                <Button className={styles.buttonMenu}>
                  <SearchOutlined className={styles.icons} />
                </Button>
                <Button className={styles.buttonMenu}>
                  <SettingOutlined className={styles.icons} />
                </Button>
                <Button className={styles.buttonMenu}>
                  <BellOutlined className={styles.icons} />
                </Button>
                <Button className={styles.buttonMenu}>
                  <Avatar
                    src='https://i.pravatar.cc/64'
                    icon={<UserOutlined />}
                  />
                </Button>
              </Flex>
            )}

            {!screens.lg && (
              <Flex align='center' flex='1' justify='end'>
                <DrawerMenu />
              </Flex>
            )}
          </Flex>
        </Col>
      </Row>
    </Header>
  );
}

export default Navbar;
