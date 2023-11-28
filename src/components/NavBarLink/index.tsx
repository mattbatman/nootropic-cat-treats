import React from 'react';

interface NavBarLinkProps {
  backwardOrForward: 'backward' | 'forward';
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ backwardOrForward }) => {
  return <a className={backwardOrForward} />;
};

export { NavBarLink };
