import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { moveForward, moveBackward } from './actions';
import { getHistory, getPlaceInHistory } from './selectors';
import quotes from './quotes';
import random from './util';

import './App.css';

import './img/favicon.png';

const { length } = quotes;

const maxQuoteIndex = length - 1;

const createMarkup = i => ({
  __html: quotes[i].quote
});

function backwardClicked(history, placeInHistory, fn) {
  if (placeInHistory === 0) {
    return;
  }
  fn(history[placeInHistory - 1]);
}

function forwardClicked(place, max, fn, current, history) {
  if (place === max) {
    return;
  }
  const lastIndex = history.length - 1;
  if (place === lastIndex) {
    fn(random(0, max, current, history));
    return;
  }
  const newPlace = place + 1;
  fn(history[newPlace]);
}

function App({
  current,
  forward,
  backward,
  history,
  placeInHistory
}) {
  const quote = quotes[current];

  return (
    <div className="App">
      <div className={`container ${quote.length}`}>
        <span className="quotemark-l">
          &ldquo;
        </span>
        <blockquote dangerouslySetInnerHTML={createMarkup(current)} />
        <div className="meta">
          <div className="cite">
            <p className="person">
              {quote.quotee}
            </p>
            <p>
              <a href={quote.link}>
                {quote.platform}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="menu">
        <span
          className={`backward ${placeInHistory === 0 ? 'disabled' : ''}`}
          onClick={() => backwardClicked(history, placeInHistory, backward)}
          onKeyPress={() => backwardClicked(history, placeInHistory, backward)}
          role="button"
          tabIndex="0"
        />
        <h2>
          Nootropic Cat Treats
        </h2>
        <span
          className={`forward ${placeInHistory === maxQuoteIndex ? 'disabled' : ''}`}
          onClick={
            () => forwardClicked(placeInHistory, maxQuoteIndex, forward, current, history)
          }
          onKeyPress={
            () => forwardClicked(placeInHistory, maxQuoteIndex, forward, current, history)
          }
          role="button"
          tabIndex="0"
        />
      </div>
    </div>
  );
}

App.propTypes = {
  current: PropTypes.number.isRequired,
  forward: PropTypes.func.isRequired,
  backward: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
  placeInHistory: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    current: state.current.value,
    history: getHistory(state),
    placeInHistory: getPlaceInHistory(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    forward: moveForward,
    backward: moveBackward
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
