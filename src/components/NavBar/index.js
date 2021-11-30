import React from 'react';
import NavBarLink from '../NavBarLink';

const NavBar = ({ id, allQuotesLength }) => {
  return (
    <nav>
      <NavBarLink isForward={false} id={id} allQuotesLength={allQuotesLength} />
      <h2>Nootropic Cat Treats</h2>
      <NavBarLink isForward={true} id={id} allQuotesLength={allQuotesLength} />
    </nav>
  );
};

export default NavBar;
