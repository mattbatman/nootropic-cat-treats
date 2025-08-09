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

  if (backwardOrForward === 'forward') {
    if (getIsAtEnd({ id, history, playlist, backwardOrForward })) {
      return (
        <span
          className={getClassName({
            backwardOrForward,
            isAtEnd: getIsAtEnd({ id, history, playlist, backwardOrForward })
          })}
        >
          <svg id="icon-arrow-right" viewBox="0 0 23 8">
            <path d="M17.656 7.744q.48-1.024.928-1.792.48-.768.928-1.28H.855V3.328h18.657q-.449-.544-.928-1.312a26 26 0 0 1-.928-1.76h1.12Q20.79 2.592 23 3.712v.576q-2.209 1.087-4.224 3.456z"></path>
          </svg>
        </span>
      );
    }

    return (
      <a
        href={nextLocation}
        className={getClassName({
          backwardOrForward,
          isAtEnd: getIsAtEnd({ id, history, playlist, backwardOrForward })
        })}
      >
        <svg id="icon-arrow-right" viewBox="0 0 23 8">
          <path d="M17.656 7.744q.48-1.024.928-1.792.48-.768.928-1.28H.855V3.328h18.657q-.449-.544-.928-1.312a26 26 0 0 1-.928-1.76h1.12Q20.79 2.592 23 3.712v.576q-2.209 1.087-4.224 3.456z"></path>
        </svg>
      </a>
    );
  }

  if (getIsAtEnd({ id, history, playlist, backwardOrForward })) {
    return (
      <span
        className={getClassName({
          backwardOrForward,
          isAtEnd: getIsAtEnd({ id, history, playlist, backwardOrForward })
        })}
      >
        <svg id="icon-arrow-left" viewBox="0 0 23 8">
          <path d="M5.345 7.744q-.48-1.024-.928-1.792-.48-.768-.928-1.28h18.656V3.328H3.489q.447-.544.928-1.312a26 26 0 0 0 .928-1.76h-1.12Q2.209 2.592 0 3.712v.576q2.208 1.087 4.224 3.456z"></path>
        </svg>
      </span>
    );
  }

  return (
    <a
      href={nextLocation}
      className={getClassName({
        backwardOrForward,
        isAtEnd: getIsAtEnd({ id, history, playlist, backwardOrForward })
      })}
    >
      <svg id="icon-arrow-left" viewBox="0 0 23 8">
        <path d="M5.345 7.744q-.48-1.024-.928-1.792-.48-.768-.928-1.28h18.656V3.328H3.489q.447-.544.928-1.312a26 26 0 0 0 .928-1.76h-1.12Q2.209 2.592 0 3.712v.576q2.208 1.087 4.224 3.456z"></path>
      </svg>
    </a>
  );
};

function getClassName({ isAtEnd, backwardOrForward }) {
  return isAtEnd ? `${backwardOrForward} disabled` : backwardOrForward;
}

export { NavBarLink };
