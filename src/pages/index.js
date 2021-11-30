import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  useEffect(() => {
    navigate('/quotes/1');
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nootropic Cat Treats</title>
      </Helmet>
      <div className="container">
        <span className="quotemark-l">“</span>
        <blockquote>loading...</blockquote>
      </div>
    </div>
  );
};

export default IndexPage;
