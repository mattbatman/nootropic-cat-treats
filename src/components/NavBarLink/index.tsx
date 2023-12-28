import React from 'react';
import { useStore } from '@nanostores/react';
import { $history } from '../stores/history';
import { $quotee } from '../stores/quotee';
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
  playlist,
  quotee
}: {
  id: number;
  backwardOrForward: 'backward' | 'forward';
  history: number[];
  playlist: CollectionEntry<'quotes'>[];
  quotee: string | null;
}) {
  const placeInHistory = history.indexOf(id);
  let nextId = id;

  if (backwardOrForward === 'forward') {
    const isAtEndOfHistory = placeInHistory === history.length - 1;

    if (isAtEndOfHistory) {
      // get a random new location to add to history
      nextId = randomNoRepeat({
        hist: history,
        cur: id,
        min: 1,
        max: playlist.length
      });

      nextId = playlist[nextId].data.id;
    } else {
      // move forward in history
      nextId = history[placeInHistory + 1];
    }
  } else {
    // if backward button
    if (placeInHistory !== 0) {
      nextId = history[placeInHistory - 1];
    }
  }

  const link = `/quotes/${nextId}`;

  if (quotee === null) {
    return link;
  }

  return `${link}?quotee=${quotee}`;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({
  backwardOrForward,
  id,
  playlist
}) => {
  const history = useStore($history);
  const quotee = useStore($quotee);
  const isAtEnd = getIsAtEnd({ id, history, playlist, backwardOrForward });
  const nextLocation = getNextLocation({
    id,
    backwardOrForward,
    history,
    playlist,
    quotee
  });

  if (!playlist || playlist.length === 0 || isAtEnd) {
    return <span className={`${backwardOrForward} disabled`} />;
  }

  return <a className={backwardOrForward} href={nextLocation} />;
};

export { NavBarLink };
