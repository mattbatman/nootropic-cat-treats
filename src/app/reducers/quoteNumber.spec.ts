import { quoteNumber } from './quoteNumber';

describe('quoteNumber reducer', () => {

  it('should return a number', () => {
    const actual = typeof(quoteNumber(0, {type: 'REFRESH', payload: 0}));
    const expected = 'number';
    expect(actual).toBe(expected);
  });

  it('should return a number greater than or equal to 0', () => {
    const actual = quoteNumber(0, {type: 'REFRESH', payload: 5});
    expect(actual).toBeGreaterThan(-1);
  });

  it('should not return a number greater than payload', () => {
    const actual = quoteNumber(0, {type: 'REFRESH', payload: 0});
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('should not return the same number as the specified state', () => {
    const actual = quoteNumber(1, {type: 'REFRESH', payload: 3});
    const expected = 1;
    expect(actual).not.toBe(expected);
  });

});
