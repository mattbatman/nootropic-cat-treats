import * as React from 'react';
import { Link } from 'gatsby';

// markup
const NotFoundPage = () => {
  return (
    <div className="App">
      <div className="container">
        <p className="jumbo">
          This page was not found. Try starting <Link to="/quotes/1">from the beginning.</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
