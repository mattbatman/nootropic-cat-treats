import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const IndexPage = () => {
  useEffect(() => {
    navigate('/quotes/1')
  }, []);

  return (
    <div className="App">
      <div className="container">
        <span className="quotemark-l">“</span>
        <blockquote>loading...</blockquote>
      </div>
    </div>
  )
}

export default IndexPage;
