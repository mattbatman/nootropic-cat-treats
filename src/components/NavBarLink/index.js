import React from 'react';
import { Link } from 'gatsby';

function getIsAtEnd(id, playlist, backwardOrForward) {
  const end = backwardOrForward === 'backward' ? 0 : playlist.length - 1
  
  if (!playlist || playlist.length <= 1) {
    return true;
  }

  return id === playlist[end].id;
}

function getNextId(id, playlist, backwardOrForward) {
  if (getIsAtEnd(id, playlist, backwardOrForward)) {
    return id;
  }

  const placeInPlaylist = playlist.findIndex((data) => data.id === id);
  const incrementer = backwardOrForward === 'backward' ? -1 : 1;

  return placeInPlaylist > -1 ? playlist[placeInPlaylist + incrementer].id : id;
}

const NavBarLink = ({ id, playlist, backwardOrForward }) => {
  const isAtEnd = getIsAtEnd(id, playlist, backwardOrForward);

  if (!playlist || playlist.length === 0 || isAtEnd) {
    return <span className={`${backwardOrForward} disabled`} />;
  }

  return <Link to={`/quotes/${getNextId(id, playlist, backwardOrForward)}`} className={backwardOrForward} />;
};

export default NavBarLink;
