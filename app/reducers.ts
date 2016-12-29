import { QUOTES } from './quotes/quotes';
export const REFRESH = 'REFRESH';


export function quote (state = QUOTES[0], {type, payload}) {
  function getRandomQuote(quotes) {
    let randomNumber = getRandomInt(0, quotes.length - 1);
    return quotes[randomNumber];
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  switch (type) {
    case REFRESH:
    return getRandomQuote(QUOTES);
  }
  return state;
};
