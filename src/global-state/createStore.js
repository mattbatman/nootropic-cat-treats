import { combineReducers, createStore as reduxCreateStore } from 'redux';
import quoteeReducer from './reducers/quotee';

const reducers = combineReducers({
  selectedQuotee: quoteeReducer
});

const createStore = () => reduxCreateStore(reducers);

export default createStore;
