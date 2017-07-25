import { ActionReducer, combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromQuoteNumber from './quoteNumber';

export interface State {
  quoteNumber: fromQuoteNumber.State;
}

const reducers = {
  quoteNumber: fromQuoteNumber.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
}

export const getQuoteNumberState = (state: State) => state.quoteNumber;

 export const getQuoteNumber = createSelector(getQuoteNumberState, fromQuoteNumber.getQuoteNumber);
