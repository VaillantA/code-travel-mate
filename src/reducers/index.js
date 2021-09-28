import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  events: eventsReducer,
});

export default rootReducer;
