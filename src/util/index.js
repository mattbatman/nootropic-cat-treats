function randomNoRepeat(min, max, cur, hist) {
  let n = Math.floor(Math.random() * ((max - min) + 1)) + min;
  if (n === cur) {
    if (n < max) {
      n += 1;
    } else if (n > min) {
      n -= 1;
    } else {
      n = Math.floor(Math.random() * ((max - min) + 1)) + min;
    }
  }
  if (hist.indexOf(n) === -1) {
    return n;
  }
  return randomNoRepeat(min, max, cur, hist);
}

export default randomNoRepeat;
