import '../styles/main.scss';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import AppLayout from '@/presentation/layouts/AppLayout';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode; // eslint-disable-line
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { getLayout } = Component;
  return getLayout ? (
    getLayout(<Component {...pageProps} />)
  ) : (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
