import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavQuoteeList from '../NavQuoteeList';
import NavBarLink from '../NavBarLink';

const NavBar = ({ id, allQuotesLength }) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query QuoteAuthorQuery {
      allQuotesJson {
        nodes {
          quotee
        }
      }
    }
  `);

  const quotees = data.allQuotesJson.nodes
    .map(({ quotee }) => quotee)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <nav className={isOpen ? 'open' : 'closed'}>
      {isOpen ? null : (
        <NavBarLink
          isForward={false}
          id={id}
          allQuotesLength={allQuotesLength}
        />
      )}
      {isOpen ? <button className="close-button" onClick={() => setIsOpen(false)}>x</button> : null}
      {isOpen ? (
        <NavQuoteeList quotees={quotees} handleClick={() => setIsOpen(false)} />
      ) : (
        <h2 onClick={() => setIsOpen(true)}>Nootropic Cat Treats</h2>
      )}
      {isOpen ? null : (
        <NavBarLink
          isForward={true}
          id={id}
          allQuotesLength={allQuotesLength}
        />
      )}
    </nav>
  );
};

export default NavBar;
