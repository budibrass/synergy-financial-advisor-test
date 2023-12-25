import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div className="example">
        <Spin delay={10000} size='large' />
  </div>
  )
}

export default Loading