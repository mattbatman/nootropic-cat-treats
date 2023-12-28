import React, { useEffect } from 'react';
import { NavBarLink } from '../NavBarLink';
import { useStore } from '@nanostores/react';
import { $quotee, updateQuotee } from '../stores/quotee';
import type { CollectionEntry } from 'astro:content';

const NavBar: React.FC<{
  id: number;
  quotes: CollectionEntry<'quotes'>[];
}> = ({ id, quotes }) => {
  const quotee$ = useStore($quotee);
  const playlist =
    quotee$ !== null
      ? quotes.filter(function (quote) {
          return quote.data.quotee === quotee$;
        })
      : quotes;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const quoteeInParam = urlParams.get('quotee');

    updateQuotee({ newQuotee: quoteeInParam, id });
  }, []);

  return (
    <nav className="closed">
      <NavBarLink backwardOrForward="backward" id={id} playlist={playlist} />
      <button className="playlist-button">
        <span className="playlist-button-text">
          <a href="/quotees">{quotee$ ? quotee$ : 'Nootropic Cat Treats'}</a>
        </span>
      </button>
      <NavBarLink backwardOrForward="forward" id={id} playlist={playlist} />
    </nav>
  );
};

export { NavBar };
