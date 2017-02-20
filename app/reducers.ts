export const REFRESH = 'REFRESH';

export function quote(state = 0, {type, payload}) {

  function getRandomInt(min, max, c) {
    let n = Math.floor(Math.random() * (max - min + 1)) + min;
    if (n === c) {
      if (n < max) {
        n++;
      } else if (n > min) {
        n--;
      } else {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
    return n;
  };

  switch (type) {
    case REFRESH:
      return getRandomInt(0, payload, state);
  }
  return state;
};
