import QueryProvider from '@/providers/QueryProvider';

export default function Layout({ children }) {
  return <QueryProvider>{children}</QueryProvider>;
}
