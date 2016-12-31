export const REFRESH = 'REFRESH';


export function quote (state = 0, {type, payload}) {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  switch (type) {
    case REFRESH:
    return getRandomInt(0, payload);
  }
  return state;
};
