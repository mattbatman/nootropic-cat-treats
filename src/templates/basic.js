import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../components/Nav';

const basicTemplate = (props) => {
  const { pageContext } = props;
  const { id, quote, quotee, platform, link } = pageContext;

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nootropic Cat Treats</title>
      </Helmet>
      <div className="container">
        <span className="quotemark-l">“</span>
        <blockquote dangerouslySetInnerHTML={{ __html: quote }}></blockquote>
        <cite>
          <p>{quotee}</p>
          <p>
            <a href={link}>{platform}</a>
          </p>
        </cite>
      </div>
      <Nav id={id} />
    </div>
  );
};
export default basicTemplate;
