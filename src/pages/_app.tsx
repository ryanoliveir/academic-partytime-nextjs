import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { queryClient } from '@/libs/react-query';
import { QueryClientProvider } from 'react-query';
import Head from 'next/head';
import { AuthContext } from '@/context/AuthContext';
import { getCookie } from 'cookies-next';

export default function App({ Component, pageProps }: AppProps) {

  const token = getCookie('authorization');

  return (
    <>
      <Head>
        <meta content="width=device-width,initial-scale=1, user-scalable=no" name="viewport" />
        <title>Partytime</title>
      </Head>
      <AuthContext.Provider value={token as string}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthContext.Provider>
    </>
  )
}
