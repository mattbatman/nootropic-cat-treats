import React from "react";
import { NavBarLink } from "../NavBarLink";
import { NavPlaylistButton } from '../NavPlaylistButton'

const NavBar = () => {
  return (
    <nav className="closed">
      <NavPlaylistButton />
      <NavBarLink backwardOrForward="backward" />
      <button className="playlist-button">
        <span className="playlist-button-text">Nootropic Cat Treats</span>
      </button>
      <NavBarLink backwardOrForward="forward" />
    </nav>
  );
};

export { NavBar };
