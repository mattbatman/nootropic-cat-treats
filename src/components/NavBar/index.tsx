import React, { useEffect } from 'react';
import { NavBarLink } from '../NavBarLink';
import { updateQuotee } from '../stores/quotee';
import { NavPlaylistButton } from '../NavPlaylistButton';
import type { QuoteMeta } from '../stores/types';
import { populateQuotes } from '../stores/quotes-meta';
import { addHistory } from '../stores/history';

const NavBar: React.FC<{
  id: number;
  quoteMeta: QuoteMeta[];
}> = ({ id, quoteMeta }) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const quoteeInParam = urlParams.get('quotee');

    updateQuotee({ newQuotee: quoteeInParam ?? '', id });
  }, []);

  useEffect(() => {
    addHistory(id);
  }, [id]);

  useEffect(() => {
    populateQuotes(quoteMeta);
  }, [quoteMeta]);

  return (
    <nav className="closed">
      <NavBarLink backwardOrForward="backward" id={id} />
      <NavPlaylistButton />
      <NavBarLink backwardOrForward="forward" id={id} />
    </nav>
  );
};

export { NavBar };
