import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import Header from '@/components/Header';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
