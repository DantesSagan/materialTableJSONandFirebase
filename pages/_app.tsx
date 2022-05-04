import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavbarIndex from './navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarIndex />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
