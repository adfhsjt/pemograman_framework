import "../styles/globals.css";
import type { AppProps } from 'next/app'
import AppShell from '@/components/layouts/Appshell';
import {SessionProvider} from "next-auth/react";
import dynamic from "next/dynamic";

const Analytics = dynamic(() => import('@/components/analytics/Analytics'), { ssr: false });

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Analytics />
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
    </SessionProvider>
    
  );
};
