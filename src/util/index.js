export default function (min, max, cur) {
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
  return n;
}
