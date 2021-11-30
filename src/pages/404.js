import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nootropic Cat Treats</title>
      </Helmet>
      <div className="container">
        <p className="jumbo">
          This page was not found. Try starting{' '}
          <Link to="/quotes/1">from the beginning.</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
