/* global window */

import xs from 'xstream';
import { html } from 'snabbdom-jsx';
import random from '../util';
import quotes from '../quotes';

function scrollJack() {
  window.scrollTo(0, 0);
}

function initState(l) {
  const first = random(0, l, 0);
  return {
    history: [first],
    placeInHistory: 0,
    next: first
  }
}

// interpret what the user wants to do for the model
function intent(domSource) {
  const forwardClickEvent$ = domSource.select('.forward').events('click');
  const backwardClickEvent$ = domSource.select('.backward').events('click');
  return {
    forwardClickEvent$,
    backwardClickEvent$
  };
}

// model represents internal app state
function model(actions) {
  const quotesLength = quotes.length - 1;
  const { backwardClickEvent$ } = actions;
  const { forwardClickEvent$ } = actions;

  const forwardClickStr$ = forwardClickEvent$.map(_ => 'forward');
  const backwardClickStr$ = backwardClickEvent$.map(_ => 'back');

  const sideEffect$ = xs.merge(forwardClickStr$, backwardClickStr$);

  return xs.merge(forwardClickStr$, backwardClickStr$)
    .fold((prev, cur) => {

      scrollJack();

      if (cur === 'forward') {
        if (prev.placeInHistory + 1 === prev.history.length) {
          const next = random(0, quotesLength, prev.next);
          prev.history.push(next);
          return {
            next,
            placeInHistory: prev.placeInHistory += 1,
            history: prev.history
          };
        } else {
          const placeInHistory = prev.placeInHistory + 1;
          const next = prev.history[placeInHistory];
          return {
            next,
            placeInHistory,
            history: prev.history
          };
        }
      }

      if (cur === 'back') {
        if (prev.placeInHistory === 0) {
          return prev;
        }
        const placeInHistory = prev.placeInHistory - 1;
        const next = prev.history[placeInHistory];
        return {
          next,
          placeInHistory,
          history: prev.history
        };
      }
    }, initState(quotes.length));
}

// views render state
function view(state$) {
  return state$
  .map(state => {
    const quoteObj = quotes[state.next];
    return (
      <div className="App">
        <div className={`container ${quoteObj.length}`}>
          <span className="quotemark-l">​‌&ldquo;</span>
          <blockquote innerHTML={quoteObj.quote}></blockquote>
          <div className="meta">
            <div className="cite">
              <p className="person">{quoteObj.quotee}</p>
              <p><a href={quoteObj.link}>{quoteObj.platform}</a></p>
            </div>
          </div>
        </div>
        <div className="menu">
          <span className={`backward ${state.placeInHistory === 0 ? 'disabled' : ''}`}></span>
          <h2>Nootropic Cat Treats</h2>
          <span className="forward"></span>
        </div>
      </div>
    );
  }
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
