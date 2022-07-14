import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import AppLayout from '../presentation/layouts/AppLayout';
import '../styles/globals.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode; // eslint-disable-line
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { getLayout } = Component;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=3"
        />
      </Head>
      {getLayout ? (
        getLayout(<Component {...pageProps} />)
      ) : (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      )}
    </>
  );
}

export default MyApp;
