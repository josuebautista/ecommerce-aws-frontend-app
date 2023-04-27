import '@/styles/globals.css';
import { AppProvider } from '@/utils/Context';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AppProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppProvider>
  )
}
