import React from 'react';
import { Link } from 'gatsby';
import NavBar from '../components/NavBar';

const basicTemplate = (props) => {
  const { pageContext } = props;
  const { id, quote, quotee, platform, link, length, allQuotesLength } =
    pageContext;

  return (
    <div className="App">
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
      <NavBar id={id} allQuotesLength={allQuotesLength} />
    </div>
  );
};
export default basicTemplate;
