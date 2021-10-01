import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import eventsReducer from './eventsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  events: eventsReducer,
  login: loginReducer,
});

export default rootReducer;
