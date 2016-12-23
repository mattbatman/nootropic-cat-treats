import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import './rxjs-operators';

import { Store } from '@ngrx/store';

import { REFRESH } from './reducers';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  // quoteSource = new BehaviorSubject(this.getRandomQuote(Quotes));
  quote$;
  text$;
  quotee$;
  platform$;
  link$;
  click$ = new Subject();

  constructor(store: Store<any>) {
    this.quote$ = store.select('quote');

    this.text$ = this.quote$.map(
      (quote) => { return quote.quote; }
    );

    this.quotee$ = this.quote$.map(
      (quote) => { return quote.quotee; }
    );

    this.platform$ = this.quote$.map(
      (quote) => { return quote.platform; }
    );

    this.link$ = this.quote$.map(
      (quote) => { return quote.link; }
    );

    this.click$
    .mapTo(REFRESH)
    .subscribe(
      (type) => {
        store.dispatch({type});
      }
    );
  }

}
