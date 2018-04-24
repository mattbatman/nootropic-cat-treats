import { run } from '@cycle/run';
import { makeDOMDriver } from '@cycle/dom';
import App from './page/app';

import './css/index.css';

const favicon = require('./img/favicon.png');

const main = App;

const drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);

/*
In cycle.js, applications are a loop of write effects and read effects
*/
