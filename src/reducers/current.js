import { FORWARD, BACKWARD } from '../actions';
import quotes from '../quotes';
import random from '../util';

const maxIndex = quotes.length - 1;

const initialState = {
  value: random(0, maxIndex, 0, []),
  type: FORWARD
};

const current = (state = initialState, action) => {
  switch (action.type) {
    case FORWARD:
    case BACKWARD:
      return Object.assign({}, state, {
        value: action.value,
        type: action.type
      });
    default:
      return state;
  }
};

export default current;
