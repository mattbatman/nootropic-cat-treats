import type { CollectionEntry } from 'astro:content';

function randomNoRepeat(min: number, max: number, cur: number, hist: number[]) {
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

  return randomNoRepeat(min, max, cur, hist);
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
  playlist,
  backwardOrForward
}: {
  id: number;
  playlist: CollectionEntry<'quotes'>[];
  backwardOrForward: 'backward' | 'forward';
}) {
  const end = backwardOrForward === 'backward' ? 0 : playlist.length - 1;

  if (!playlist || playlist.length <= 1) {
    return true;
  }

  return id === playlist[end].data.id;
}

export { randomNoRepeat, getRandomNumber, getIsAtEnd };
