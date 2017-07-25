import { TestBed, async, inject } from '@angular/core/testing';
import { RandomService } from './random';

describe('RandomService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RandomService] });
  });

  it('should return a number greater than or equal to the minimum number provided',
    async(
      inject([RandomService], (rs: RandomService) => {
        const min = 0;
        const actual = rs.getRandomInt(min, 3, 2);
        expect(actual).toBeGreaterThanOrEqual(min);
  })));

  it('should not return the current number provided',
    async(
      inject([RandomService], (rs: RandomService) => {
        const cur = 2;
        const actual = rs.getRandomInt(0, 3, cur);
        expect(actual).not.toBe(cur);
  })));

  it('should return a number less than or equal to the max number provided',
    async(
      inject([RandomService], (rs: RandomService) => {
        const max = 5;
        const actual = rs.getRandomInt(0, max, 2);
        expect(actual).toBeLessThanOrEqual(max);
  })));
});
