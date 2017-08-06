import { TestBed, fakeAsync, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Action, Store, StoreModule } from '@ngrx/store';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { RandomEffects } from './random';
import { RandomService } from '../services/random';
import * as fromRoot from '../reducers';
import * as creator from '../actions';
import { QUOTES } from '../models/quotes';
import { MockStore } from '../test-helpers/mock-store';

describe('RandomEffects', () => {
  let randomServiceStub: RandomService;

  beforeEach(() => {

    randomServiceStub = {
      getRandomInt: (min, max, cur) => { return 1; }
    };

    TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore(fromRoot.reducer),
        EffectsTestingModule
      ],
      providers: [
        RandomEffects,
        { provide: Store, useValue: new MockStore({ quoteNumber: 0 }) },
        { provide: RandomService, useValue: randomServiceStub }
      ]
    });

    spyOn(RandomService.prototype, 'getRandomInt').and.returnValue(1);
});

  function setup() {
    return {
      runner: TestBed.get(EffectsRunner),
      randomEffects: TestBed.get(RandomEffects)
    };
  }

  describe('search$', () => {
    it('should return a new creator.RandomGeneratedAction', fakeAsync(() => {
      const rs = new RandomService();
      const ql = QUOTES.length - 1;
      const quotes = [ql];
      const {runner, randomEffects} = setup();
      runner.queue(new creator.NewQuoteClickedAction(ql));
      const expected = new creator.RandomGeneratedAction(rs.getRandomInt(0, ql, 0));
      let actual = null;
      randomEffects.search$.subscribe(_result => actual = _result);
      expect(actual).toEqual(expected);
    }));
  });
});
