

/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer from 'src/reducers';

// le store est le détenteur du state
// on doit lui donner une fonction reducer dans le cas d'un store géré avec redux
// ainsi il saura initialiser le state et le faire évoluer
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
); // on ajoute le code du redux devtools
// récupéré ici https://github.com/zalmoxisus/redux-devtools-extension#installation

export default store;
