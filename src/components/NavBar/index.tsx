import React from 'react';
import { NavBarLink } from '../NavBarLink';
import type { CollectionEntry } from 'astro:content';

const NavBar: React.FC<{
  id: number;
  playlist: CollectionEntry<'quotes'>[];
}> = ({ id, playlist }) => {
  return (
    <nav className="closed">
      <NavBarLink backwardOrForward="backward" id={id} playlist={playlist} />
      <button className="playlist-button">
        <span className="playlist-button-text">
          <a href="/quotees">Nootropic Cat Treats</a>
        </span>
      </button>
      <NavBarLink backwardOrForward="forward" id={id} playlist={playlist} />
    </nav>
  );
};

export { NavBar };
