import React from 'react';
import { useStore } from '@nanostores/react';
import { $quotee } from '../stores/quotee';

const NavPlaylistButton: React.FC = () => {
  const quotee = useStore($quotee);

  return (
    <button className="playlist-button">
      <span className="playlist-button-text">
        <a href="/quotees">{quotee !== '' ? quotee : 'Nootropic Cat Treats'}</a>
      </span>
    </button>
  );
};

export { NavPlaylistButton };
