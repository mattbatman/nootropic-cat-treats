import React from 'react';
import { useStore } from '@nanostores/react';
import { $history } from '../stores/history';
import { NavBarLink } from '../NavBarLink';
import { NavPlaylistButton } from '../NavPlaylistButton';
import type { CollectionEntry } from 'astro:content';

const NavBar: React.FC<{
  id: number;
  playlist: CollectionEntry<'quotes'>[];
}> = ({ id, playlist }) => {
  const history = useStore($history);

  return (
    <nav className="closed">
      <NavPlaylistButton />
      <NavBarLink backwardOrForward="backward" id={id} playlist={playlist} />
      <button className="playlist-button">
        <span className="playlist-button-text">Nootropic Cat Treats</span>
      </button>
      <NavBarLink backwardOrForward="forward" id={id} playlist={playlist} />
    </nav>
  );
};

export { NavBar };
