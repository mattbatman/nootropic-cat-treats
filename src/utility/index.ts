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

export { randomNoRepeat, getRandomNumber };
