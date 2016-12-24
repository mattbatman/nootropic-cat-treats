import { QUOTES } from './quotes/quotes';
export const REFRESH = 'REFRESH';


export const quote = (state = QUOTES[0], {type, payload}) => {
  switch (type) {
    case REFRESH:
    return getRandomQuote(QUOTES);
  }
  return state;
};

function getRandomQuote(quotes) {
  let randomNumber = getRandomInt(0, quotes.length - 1);
  return quotes[randomNumber];
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
