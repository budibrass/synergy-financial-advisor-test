import React from 'react';
import {
  Avatar,
  Col,
  Row,
  Layout,
  Divider,
  Typography,
  Button,
  theme,
  Flex,
  List,
  Card,
} from 'antd';

const { Content } = Layout;
const { Text, Title } = Typography;
const { useToken } = theme;

const ProfileCard = ({ title, content, srcImage, isInsurance = false }) => (
  <Card>
    <Flex align='center' gap='middle'>
      <Avatar size={64} src={srcImage} />
      <Flex vertical flex='1'>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>{title}</Text>
        <Text style={{ fontWeight: 300 }}>{content}</Text>
      </Flex>
      <Button onClick={()=> alert('This feature will be develop for feature, hope see you again')} size='large'>{isInsurance ? 'View Insurance' : 'Edit'}</Button>
    </Flex>
  </Card>
);

const DetailProfileCilents = ({ name, data }) => {
  const { token } = useToken();

  return (
    <Content>
      <div style={{ marginTop: '1.5rem' }}>
        <Title level={3}>{name.replace(/\-/, ' ').toUpperCase()}</Title>
        <Divider />

        <Flex
          align='center'
          style={{
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            borderRadius: token.borderRadiusLG,
            backgroundColor: token.colorFillSecondary,
          }}
        >
          <Row style={{ flex: 'auto' }}>
            {[
              { title: 'Gender', content: data.clientInformation?.gender },
              {
                title: 'DOB',
                content: new Date(
                  data.clientInformation?.dob
                ).toLocaleDateString(),
              },
              {
                title: 'Marital Status',
                content: data.clientInformation?.maritalStatus,
              },
              {
                title: 'Employment',
                content: data.clientInformation?.employmentStatus,
              },
            ].map((item) => (
              <Col key={item.title} xs={6} lg={4}>
                <Flex vertical>
                  <Text style={{ color: token.colorTextSecondary }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 300,
                      color: token.colorTextSecondary,
                    }}
                  >
                    {item.content}
                  </Text>
                </Flex>
              </Col>
            ))}
          </Row>
        </Flex>

        <div style={{ marginTop: '1.5rem' }}>
          <Title level={4}>Financials</Title>
          <Divider />

          <List
            size='large'
            bordered
            dataSource={Object.keys(data.financials)}
            renderItem={(item) => (
              <List.Item
                style={{
                  textTransform: 'capitalize',
                }}
              >
                <Flex>{item}</Flex>
                <Flex>{'$' + data.financials[item]}</Flex>
              </List.Item>
            )}
          />
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Title level={4}>Goals</Title>
          <Divider />

          <Row gutter={[24, 24]}>
            {[
              { title: 'Emergency Fund', content: data.goals?.emergencyFund },
              { title: 'Travel', content: data.goals?.travel },
            ].map((item) => (
              <Col key={item.title} xs={24} lg={12}>
                <ProfileCard
                  title={item.title}
                  content={'$' + item.content}
                  srcImage={`https://i.pravatar.cc/${Math.floor(
                    Math.random() * 150
                  )}`}
                />
              </Col>
            ))}
          </Row>
        </div>

        <div style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
          <Title level={4}>Insurances</Title>
          <Divider />

          <Row gutter={[24, 24]}>
            {[
              {
                title: 'Life Insurance',
                content: data.insurances?.lifeInsurance,
              },
              {
                title: 'Personal Accident',
                content: data.insurances?.personalAccident,
              },
            ].map((item) => (
              <Col key={item.title} xs={24} lg={12}>
                <ProfileCard
                  isInsurance
                  title={item.title}
                  content={'Plan A · $' + item.content}
                  srcImage={`https://i.pravatar.cc/${Math.floor(
                    Math.random() * 150
                  )}`}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default DetailProfileCilents;
