import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import eventsReducer from './eventsReducer';
import profilReducer from './profilReducer';

import loginReducer from './loginReducer';
import registerReducer from './registerFormReducer';

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  events: eventsReducer,
  profil : profilReducer,
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
