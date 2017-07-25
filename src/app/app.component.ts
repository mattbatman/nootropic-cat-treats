import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';

import { Store } from '@ngrx/store';

import * as creator from './actions';
import * as fromRoot from './reducers';

import { QUOTES } from './models/quotes';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div [ngClass]="setContainerClass()">
    <span class="quotemark-l">​‌&ldquo;</span>
  	<blockquote [innerHTML]="text$ | async"></blockquote>
    <span class="quotemark-r">​‌&rdquo;</span>
      <div class="meta">
          <div class="cite">
              <p class="person">{{quotee$ | async}}</p>
              <p><a href="{{link$ | async}}">{{platform$ | async}}</a></p>
          </div>
          <button (click)="onClick($event)">New Quote</button>
      </div>
  </div>
  `
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
  quotesLength = QUOTES.length - 1;

  constructor(store: Store<fromRoot.State>) {
    this.quote$ = store.select(fromRoot.getQuoteNumber)
      .map(n => QUOTES[n]);

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
      .mapTo(new creator.NewQuoteClickedAction(this.quotesLength))
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
