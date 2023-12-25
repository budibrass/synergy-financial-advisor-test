import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/reducer/store';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}