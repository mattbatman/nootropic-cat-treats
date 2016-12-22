import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import './rxjs-operators';

import { Quotes } from './quotes/quotes';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {
  quoteSource = new BehaviorSubject(this.getRandomQuote(Quotes));
  quote$ = this.quoteSource.asObservable();
  text$ = this.quote$.map(
    (quote) => { return quote.quote; }
  );
  quotee$ = this.quote$.map(
    (quote) => { return quote.quotee; }
  );
  platform$ = this.quote$.map(
    (quote) => { return quote.platform; }
  );
  link$ = this.quote$.map(
    (quote) => { return quote.link; }
  );

  getRandomQuote(quotes) {
    let randomNumber = this.getRandomInt(0, quotes.length - 1);
    return quotes[randomNumber];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onClick() {
    this.quoteSource.next(this.getRandomQuote(Quotes));
  }
}
