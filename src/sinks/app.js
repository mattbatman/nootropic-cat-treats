import { button, div, h, p, span } from '@cycle/dom';
import xs from 'xstream';
import random from '../util';
import quotes from '../quotes';

// interpret what the user wants to do for the model
function intent(domSource) {
  const newClick$ = domSource.select('.new').events('click');
  return { newClick$ };
}

// model represents internal app state
function model(actions) {
  const quotesLength = quotes.length - 1;
  const { newClick$ } = actions;
  return newClick$
    .fold((prev, cur) => {
      cur.target.blur();
      return random(0, quotesLength, prev);
    }, random(0, quotesLength, 0))
    .map(n => quotes[n]);
}

// views render state
function view(state$) {
  return state$.map(quoteObj =>
    div(`.container.${quoteObj.length}`, [
      span('.quotemark-l', '“'),
      h('blockquote', { props: { innerHTML: quoteObj.quote } }),
      div('.meta', [
        div('.cite', [
          p('.person', quoteObj.quotee),
          p([
            h('a', { props: { href: quoteObj.link } }, quoteObj.platform)
          ])
        ])
      ]),
      div('.container-button', [
        button('.new', 'new quote')
      ])
    ])
  );
}

export default function (sources) {
  const actions = intent(sources.DOM);
  const state$ = model(actions);
  const vdom$ = view(state$);

  const sinks = {
    DOM: vdom$
  };

  return sinks;
}

/*
source = input (read) effect
sink = output (write) effect
*/

/*
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
*/
