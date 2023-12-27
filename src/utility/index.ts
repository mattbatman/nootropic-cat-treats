import type { CollectionEntry } from 'astro:content';

function randomNoRepeat({
  min,
  max,
  cur,
  hist
}: {
  min: number;
  max: number;
  cur: number;
  hist: number[];
}) {
  let n = Math.floor(Math.random() * (max - min + 1)) + min;
  if (n === cur) {
    if (n < max) {
      n += 1;
    } else if (n > min) {
      n -= 1;
    } else {
      n = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  if (hist.indexOf(n) === -1) {
    return n;
  }

  return randomNoRepeat({ min, max, cur, hist });
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
  playlist: CollectionEntry<'quotes'>[];
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
