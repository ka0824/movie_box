import { Inter } from 'next/font/google';
import '../styles/globals.css';

import QueryProvider from '@/providers/QueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <QueryProvider>
        <body className={inter.className}>{children}</body>
      </QueryProvider>
    </html>
  );
}
