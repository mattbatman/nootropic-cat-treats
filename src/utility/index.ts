import type { CollectionEntry } from 'astro:content';
import type { QuoteMeta } from '../components/stores/types';

function randomNoRepeat({
  playlist,
  hist
}: {
  playlist: QuoteMeta[];
  hist: number[];
}) {
  if (playlist.length === history.length) {
    return null;
  }

  const min = 1;
  const max = playlist.length;

  let n = Math.floor(Math.random() * (max - min + 1)) + min;

  const nextId = playlist[n - 1].id;

  if (hist.indexOf(nextId) === -1) {
    return n;
  }

  return randomNoRepeat({ playlist, hist });
}

function getRandomNumber({
  min,
  max,
  current
}: {
  min: number;
  max: number;
  current: number | null;
}): number {
  let n = Math.floor(Math.random() * (max - min + 1)) + min;

  if (current !== null) {
    if (n === current) {
      if (n < max) {
        n += 1;
      } else if (n > min) {
        n -= 1;
      } else {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  }

  return n;
}

function getIsAtEnd({
  id,
  history,
  backwardOrForward,
  playlist
}: {
  id: number;
  history: number[];
  playlist: QuoteMeta[];
  backwardOrForward: 'backward' | 'forward';
}) {
  const placeInHistory = history.indexOf(id);

  if (backwardOrForward === 'backward') {
    return placeInHistory === 0;
  }

  return placeInHistory === playlist.length - 1;
}

function getAllQuotees(quotes: Array<CollectionEntry<'quotes'>>) {
  return quotes.map(({ data }) => data.quotee);
}

function getUniqueQuoteesWithCountAndStartId(
  quotes: Array<CollectionEntry<'quotes'>>
): Array<[string, number, number]> {
  return [
    ...getAllQuotees(quotes).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>()
    )
  ]
    .sort((a, b) => b[1] - a[1])
    .map(([quotee, count]) => {
      const firstQuote = quotes.find(({ data }) => data.quotee === quotee);

      return [quotee, count, firstQuote?.data.id ?? 0];
    });
}

export {
  randomNoRepeat,
  getRandomNumber,
  getIsAtEnd,
  getUniqueQuoteesWithCountAndStartId
};
