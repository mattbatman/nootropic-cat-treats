import { Component } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import './rxjs-operators';

import { Store } from '@ngrx/store';

import { QUOTES } from './quotes/quotes';
import { REFRESH } from './reducers';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  quote$;
  text$;
  quotee$;
  platform$;
  link$;
  length$;
  click$ = new Subject();
  length;

  constructor(store: Store<any>) {
    this.quote$ = store.map(no => QUOTES[no]);

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

    this.length$ = this.quote$.map(
      (quote) => { return quote.length; }
    ).subscribe(
      (length) => { this.length = length; }
    );

    this.click$
    .mapTo({type: REFRESH, payload: QUOTES.length - 1})
    .subscribe(
      (action) => {
        store.dispatch(action);
      }
    );
  }

  onClick(event) {
    this.click$.next();
    event.target.blur();
  }

  setContainerClass() {
    let classes = {
      container: true,
      long: this.length === 'long',
      short: false,
      medium: this.length === 'medium'
    };
    return classes;
  }

}
