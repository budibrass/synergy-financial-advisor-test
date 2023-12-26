import 'antd/dist/reset.css';

import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import theme from '../../themeConfig';
import { wrapper } from '@/lib/store';

function App({ Component, pageProps }) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default wrapper.withRedux(App);
