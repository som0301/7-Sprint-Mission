import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <h2>Not Found</h2>
    </>
  );
}

export default NotFound;
