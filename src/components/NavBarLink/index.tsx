import React from 'react';
import { useStore } from '@nanostores/react';
import { $history } from '../stores/history';
import { getIsAtEnd, randomNoRepeat } from '../../utility';
import type { CollectionEntry } from 'astro:content';

interface NavBarLinkProps {
  backwardOrForward: 'backward' | 'forward';
  id: number;
  playlist: CollectionEntry<'quotes'>[];
}

function getNextLocation({
  id,
  backwardOrForward,
  history,
  playlist
}: {
  id: number;
  backwardOrForward: 'backward' | 'forward';
  history: number[];
  playlist: CollectionEntry<'quotes'>[];
}) {
  const placeInHistory = history.indexOf(id);
  let nextId = id;

  if (backwardOrForward === 'forward') {
    if (placeInHistory === history.length - 1) {
      nextId = randomNoRepeat({
        hist: history,
        cur: id,
        min: 0,
        max: playlist.length
      });
    } else {
      nextId = history[placeInHistory + 1];
    }
  } else {
    if (history.length > 1) {
      nextId = history[placeInHistory - 1];
    } else {
      nextId = history[0];
    }
  }

  return `/quotes/${nextId}`;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({
  backwardOrForward,
  id,
  playlist
}) => {
  const history = useStore($history);
  const isAtEnd = getIsAtEnd({ id, playlist, backwardOrForward });
  const nextLocation = getNextLocation({
    id,
    backwardOrForward,
    history,
    playlist
  });

  if (!playlist || playlist.length === 0 || isAtEnd) {
    return <span className={`${backwardOrForward} disabled`} />;
  }

  return <a className={backwardOrForward} href={nextLocation} />;
};

export { NavBarLink };
