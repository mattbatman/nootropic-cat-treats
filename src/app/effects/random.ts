import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';

import { RandomService } from '../services/random';

import * as fromRoot from '../reducers';
import * as creator from '../actions';

@Injectable()
export class RandomEffects {

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(creator.NEW_QUOTE_CLICKED)
    .map(toPayload)
    .withLatestFrom(this.store$, (p, s) => {
      return {
        payload: p,
        current: s.quoteNumber,
      };
    })
    .map((x) => new creator.RandomGeneratedAction(this.rs.getRandomInt(0, x.payload, x.current)) );

    constructor(
      private actions$: Actions,
      private store$: Store<fromRoot.State>,
      private rs: RandomService
    ) { }
};
