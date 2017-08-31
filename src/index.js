import { run } from '@cycle/run';
import { makeDOMDriver } from '@cycle/dom';
import App from './sinks/app';

import './css/index.css';
import favicon from './img/favicon.png';

const main = App;

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);

/*
In cycle.js, applications are a loop of write effects and read effects
*/
