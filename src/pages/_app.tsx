import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Movie Box</title>
          <meta
            name="description"
            content="국내 박스 오피스 통계를 제공합니다."
          ></meta>
        </Head>
        <div className="flex-1 px-24 max-md:px-0 max-md:pl-28">
          <Nav></Nav>
          <Component {...pageProps} />
        </div>
        <Footer></Footer>
      </div>
    </QueryClientProvider>
  );
}
