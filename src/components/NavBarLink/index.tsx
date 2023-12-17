import React from 'react';
import { getIsAtEnd } from '../../utility';
import type { CollectionEntry } from 'astro:content';

interface NavBarLinkProps {
  backwardOrForward: 'backward' | 'forward';
  id: number;
  playlist: CollectionEntry<'quotes'>[];
}

function getNextLocation({
  id,
  backwardOrForward
}: {
  id: number;
  backwardOrForward: 'backward' | 'forward';
}) {
  const nextId = backwardOrForward === 'forward' ? id + 1 : id - 1;

  return `/quotes/${nextId}`;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({
  backwardOrForward,
  id,
  playlist
}) => {
  const isAtEnd = getIsAtEnd({ id, playlist, backwardOrForward });
  const nextLocation = getNextLocation({ id, backwardOrForward });

  if (!playlist || playlist.length === 0 || isAtEnd) {
    return <span className={`${backwardOrForward} disabled`} />;
  }

  return <a className={backwardOrForward} href={nextLocation} />;
};

export { NavBarLink };
