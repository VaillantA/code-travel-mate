import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import eventsReducer from './eventsReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerFormReducer';

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  events: eventsReducer,
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
