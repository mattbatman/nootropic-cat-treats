import React from 'react';
import { Link } from 'gatsby';

function getIsAtMax(id, playlist) {
  if (!playlist || playlist.length <= 1) {
    return true;
  }

  return id === playlist[playlist.length - 1].id;
}

function getNextId(id, playlist) {
  if (getIsAtMax(id, playlist)) {
    return id;
  }

  const placeInPlaylist = playlist.findIndex((data) => data.id === id);

  return placeInPlaylist > -1 ? playlist[placeInPlaylist + 1].id : id;
}

const Forward = ({ id, playlist }) => {
  const isAtMax = getIsAtMax(id, playlist);

  if (!playlist || playlist.length === 0 || isAtMax) {
    return <span className="forward disabled" />;
  }

  return <Link to={`/quotes/${getNextId(id, playlist)}`} className="forward" />;
};

export default Forward;
