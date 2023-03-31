import PropTypes from 'prop-types';
import Page from '../components/Page';
import Head from 'next/head';

import '../styles/global.scss';

const MyApp = ({
  Component,
  pageProps,
}) => {
  console.log('Page props', pageProps);
  return (
    
    <Page>
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <link rel="shortcut icon" href="/images/fazer_logo.png" />
       <title>Fazer Viljavisio</title>
      </Head>
      <Component {...pageProps} />
    </Page>
  );
};

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  Component: null,
  pageProps: null,
};

export default MyApp;
