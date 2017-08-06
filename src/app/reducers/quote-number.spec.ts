import * as fromQuoteNumber from './quote-number';
import * as creator from '../actions';

describe('Quote Number Reducer', () => {

  it('Initializes state to 0', () => {
    const expected = 0;
    const actual = fromQuoteNumber.reducer(undefined, { type: null, payload: null });

    expect(actual).toEqual(expected);
  });

  it('handles the RANDOM_GENERATED action', () => {
    const expected = 9;
    const actual = fromQuoteNumber.reducer(0, new creator.RandomGeneratedAction(9));

    expect(actual).toEqual(expected);
  });
});
