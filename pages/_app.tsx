import { SessionProvider } from 'next-auth/react';
import './styles.css';

import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';

import Menu from '../components/navigation/Menu';
import ReduxProvider from '../components/redux/ReduxProvider';

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <ReduxProvider>
        <Menu />
        <div className='ml-72'>
          <Component {...pageProps} />
        </div>
      </ReduxProvider>
    </SessionProvider>
  );
}
