import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavBar from '../NavBar';

const Nav = ({ id }) => {
  const queryResponse = useStaticQuery(graphql`
    query QuoteAuthorQuery {
      allQuotesJson {
        edges {
          node {
            quotee
            jsonId
          }
        }
      }
    }
  `);

  const allQuotesData = queryResponse.allQuotesJson.edges.map(
    ({ node }) => node
  );

  const uniqueQuotees = allQuotesData
    .map(({ quotee }) => quotee)
    .filter((value, index, self) => self.indexOf(value) === index);

  if (!allQuotesData || !uniqueQuotees || !id) {
    return null;
  }

  return (
    <NavBar
      id={id}
      allQuotesData={allQuotesData}
      uniqueQuotees={uniqueQuotees}
    />
  );
};

export default Nav;
