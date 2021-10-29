import React from 'react';
import PropTypes from 'prop-types';

import '../styles/globals.css';

const propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = propTypes;

export default MyApp;
