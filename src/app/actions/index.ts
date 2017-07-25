import { Action } from '@ngrx/store';

export const NEW_QUOTE_CLICKED = 'NEW_QUOTE_CLICKED';
export const RANDOM_GENERATED = 'RANDOM_GENERATED';


export class NewQuoteClickedAction implements Action {
  readonly type = NEW_QUOTE_CLICKED;

  constructor(public payload: number) { }
}

export class RandomGeneratedAction implements Action {
  readonly type = RANDOM_GENERATED;

  constructor(public payload: number) { }
}

export type Actions
  = NewQuoteClickedAction
  | RandomGeneratedAction;
