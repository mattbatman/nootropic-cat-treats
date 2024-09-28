import React from 'react';
import { NavBar } from '../NavBar';
import type { CollectionEntry } from 'astro:content';

interface Props {
  id: number;
  quotes: CollectionEntry<'quotes'>[];
}

const Nav: React.FC<Props> = ({ id, quotes }) => {
  const quoteMeta = quotes.map(function ({ data }) {
    const { id, quotee, platform, link } = data;

    return { id, quotee, platform, link };
  });

  return <NavBar id={id} quoteMeta={quoteMeta} />;
};

export { Nav };
