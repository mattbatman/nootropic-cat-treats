import { createSelector } from 'reselect';
import * as R from 'ramda';

const getQuoteIndex = state => state.current.value;
const getMovementType = state => state.current.type;
let history = [];

function calculateHistory(index, type) {
  switch (type) {
    case 'FORWARD':
      if (history.indexOf(index) === -1) {
        history = R.append(index, history);
      }
      return history;
    default:
      return history;
  }
}

const getHistory = createSelector(
  [getQuoteIndex, getMovementType],
  calculateHistory
);

const getPlaceInHistory = createSelector(
  [getQuoteIndex],
  index => history.indexOf(index)
);

export { getHistory, getPlaceInHistory };
