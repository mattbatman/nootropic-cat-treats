import * as assert from 'assert';
import Random from './index';

describe('Random Number Generating Utility Function', () => {

  it('should not return the current number', () => {
    const actual = Random(0, 3, 1);
    const expected = 2;
    assert.equal(actual, expected);
  });
});
