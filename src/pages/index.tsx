import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/boxoffice');
  }, []);

  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}
