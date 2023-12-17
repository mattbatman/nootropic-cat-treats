import React from 'react';
import { getIsAtEnd } from '../../utility';

interface NavBarLinkProps {
  backwardOrForward: 'backward' | 'forward';
  id: number;
  playlist: any[];
}

const NavBarLink: React.FC<NavBarLinkProps> = ({
  backwardOrForward,
  id,
  playlist
}) => {
  const isAtEnd = getIsAtEnd({ id, playlist, backwardOrForward });

  if (!playlist || playlist.length === 0 || isAtEnd) {
    return <span className={`${backwardOrForward} disabled`} />;
  }

  return <a className={backwardOrForward} />;
};

export { NavBarLink };
