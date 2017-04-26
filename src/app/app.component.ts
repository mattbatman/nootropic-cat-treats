import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';

import { Store } from '@ngrx/store';

import { QUOTES } from './models/quotes';
import { REFRESH } from './reducers/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  ngOnInit() {
    this.click$.next();
  }

  setContainerClass() {
    const classes = {
      container: true,
      long: this.length === 'long',
      short: this.length === 'short',
      medium: this.length === 'medium'
    };
    return classes;
  }
}
