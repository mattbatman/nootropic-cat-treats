import React from 'react';
import { Link } from 'gatsby';

const NavBarLink = ({ isForward, id, allQuotesLength }) => {
  const isAtMin = id === 1;
  const isAtMax = id === allQuotesLength;
  if (!isForward) {
    return isAtMin ? (
      <span className="backward disabled" />
    ) : (
      <Link to={`/quotes/${id - 1}`} className="backward" />
    );
  }

  return isAtMax ? (
    <span className="forward disabled" />
  ) : (
    <Link to={`/quotes/${id + 1}`} className="forward" />
  );
};

export default NavBarLink;
