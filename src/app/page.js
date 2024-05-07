'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from 'next/font/google';
// import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/boxoffice');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <main
        className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
      ></main>
    </QueryClientProvider>
  );
}
