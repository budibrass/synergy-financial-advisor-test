import { StyleProvider } from '@ant-design/cssinjs';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { extractStaticStyle } from 'antd-style';

const MyDocument = () => (
  <Html lang='en'>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={extractStaticStyle.cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const styles = extractStaticStyle(initialProps.html).map(
    (item) => item.style
  );

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {styles}
      </>
    ),
  };
};

export default MyDocument;
