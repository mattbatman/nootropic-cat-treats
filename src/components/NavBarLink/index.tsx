import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { $history } from '../stores/history';
import { $quotee } from '../stores/quotee';
import { $playlist } from '../stores/quotes-meta';
import type { QuoteMeta } from '../stores/types';
import { getIsAtEnd, randomNoRepeat } from '../../utility';

interface NavBarLinkProps {
  backwardOrForward: 'backward' | 'forward';
  id: number;
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
  playlist: QuoteMeta[];
  quotee: string;
}) {
  const placeInHistory = history.indexOf(id);
  let nextId = id;

  // backward button
  if (backwardOrForward === 'backward') {
    if (placeInHistory !== 0) {
      nextId = history[placeInHistory - 1];
    }
  }

  // forward button
  if (backwardOrForward === 'forward') {
    const isAtEndOfHistory = placeInHistory === history.length - 1;
    const isAtEnd = getIsAtEnd({ id, history, playlist, backwardOrForward });

    if (isAtEndOfHistory && !isAtEnd) {
      // get a random new location to add to history
      const r = randomNoRepeat({
        hist: history,
        playlist
      });

      if (r !== null) {
        nextId = playlist[r - 1].id;
      }
    }

    if (!isAtEndOfHistory && !isAtEnd) {
      // move forward in history
      nextId = history[placeInHistory + 1];
    }
  }

  const link = `/quotes/${nextId}`;

  if (quotee === '') {
    return link;
  }

  return `${link}?quotee=${quotee}`;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ backwardOrForward, id }) => {
  const [nextLocation, setNextLocation] = useState('');

  const playlist = useStore($playlist);
  const history = useStore($history);
  const quotee = useStore($quotee);

  useEffect(() => {
    if (!playlist || playlist.length < 1) {
      return;
    }

    const l = getNextLocation({
      id,
      backwardOrForward,
      history,
      playlist,
      quotee
    });

    setNextLocation(l);
  }, [playlist, history, quotee, id, backwardOrForward]);

  if (getIsAtEnd({ id, history, playlist, backwardOrForward })) {
    return <span className={`${backwardOrForward} disabled`} />;
  }

  return <a className={backwardOrForward} href={nextLocation} />;
};

export { NavBarLink };
