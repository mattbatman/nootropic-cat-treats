import { createSelector } from 'reselect';
import * as creator from '../actions';

export type State = number;

const initialState: State = 0;

export function reducer(state = initialState, action: creator.Actions): State {
  switch (action.type) {
    case creator.RANDOM_GENERATED:
      return action.payload;
  }
  return state;
};

export const getQuoteNumberState = (state: State) => state;

export const getQuoteNumber = createSelector(getQuoteNumberState, (qn) => {
  return qn;
});
