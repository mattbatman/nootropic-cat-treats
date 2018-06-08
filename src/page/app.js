/* global window */

import xs from 'xstream';
import { html } from 'snabbdom-jsx';
import random from '../util';
import quotes from '../quotes';

function scrollJack() {
  window.scrollTo(0, 0);
}

function initState(l) {
  const first = random(0, l, 0, []);
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
    .fold((state, buttonClicked) => {

      scrollJack();

      if (buttonClicked === 'forward') {
        if (state.placeInHistory + 1 === state.history.length) {
          if (state.history.length - 1 === quotesLength) {
            return state;
          }
          const next = random(0, quotesLength, state.next, state.history);
          state.history.push(next);
          return {
            next,
            placeInHistory: state.placeInHistory += 1,
            history: state.history
          };
        } else {
          const placeInHistory = state.placeInHistory + 1;
          const next = state.history[placeInHistory];
          return {
            next,
            placeInHistory,
            history: state.history
          };
        }
      }

      if (buttonClicked === 'back') {
        if (state.placeInHistory === 0) {
          return state;
        }
        const placeInHistory = state.placeInHistory - 1;
        const next = state.history[placeInHistory];
        return {
          next,
          placeInHistory,
          history: state.history
        };
      }
    }, initState(quotes.length));
}

// views render state
function view(state$) {
  return state$
  .map(state => {
    const quotesLength = quotes.length - 1;
    const quoteObj = quotes[state.next];
    const endOfQuotes = state.history.length - 1 === quotesLength && state.placeInHistory === quotesLength;
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
          <span className={`forward ${endOfQuotes ? 'disabled' : ''}`}></span>
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
