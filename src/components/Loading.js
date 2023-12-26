import React from 'react';
import { Spin, Flex } from 'antd';

const Loading = () => {
  return (
    <Flex
      align='center'
      justify='center'
      style={{
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999,
      }}
    >
      <Flex
        align='center'
        justify='center'
        style={{
          width: 96,
          height: 96,
          background: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '50%',
          
        }}
      >
        <Spin size='large' style={{ scale: '2' }} />
      </Flex>
    </Flex>
  );
};

export default Loading;
