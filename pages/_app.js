import Nav from '@/components/Nav';
import Container from '@/components/Container';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const is404Page = Component.name === 'NotFound';

  if (is404Page) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Nav />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
