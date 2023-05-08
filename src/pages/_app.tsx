import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Movie Box</title>
        <meta
          name="description"
          content="국내 박스 오피스 통계를 제공합니다."
        ></meta>
      </Head>
      <Nav></Nav>
      <div className="flex-1 px-24">
        <Component {...pageProps} />
      </div>
      <Footer></Footer>
    </div>
  );
}
