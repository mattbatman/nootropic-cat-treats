import { atom, computed } from 'nanostores';
import { $quotee } from './quotee';
import type { QuoteMeta } from './types';

const $quotes = atom<QuoteMeta[]>([]);
const $playlist = computed([$quotes, $quotee], (quotes, quotee) => {
  if (!quotee || quotee === '') {
    return quotes;
  }

  const playlist = quotes.filter((quote) => {
    return quote.quotee === quotee;
  });

  return playlist;
});

function populateQuotes(quotes: QuoteMeta[]) {
  $quotes.set(quotes);
}

export { $quotes, populateQuotes, $playlist };
