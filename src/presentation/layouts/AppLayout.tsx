import Image from 'next/image';
import { ReactNode } from 'react';

import CustomSeoHead from './CustomSeoHead';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: LayoutProps) {
  return (
    <>
      <CustomSeoHead />
      <header id="header" style={{ textAlign: 'center', padding: '20px' }}>
        <a href="#header" rel="noopener noreferrer">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
