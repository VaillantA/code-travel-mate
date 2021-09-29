import axios from 'axios';

const api = axios.create({
  baseURL: 'http://benjamin-gleitz.vpnuser.lan:8080/api/v1',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === 'FETCH_EVENTS') {
    api.get('/event')
      .then((response) => {
        store.dispatch({
          type: 'SAVE_EVENTS',
          events: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        store.dispatch({
          type: 'RECEIVE_ERROR',
        });
      })
      .finally(() => {
      });
  }
  else if (action.type === 'FETCH_CATEGORIES') {
    api.get('/category')
      .then((response) => {
        store.dispatch({
          type: 'SAVE_CATEGORIES',
          categories: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        store.dispatch({
          type: 'RECEIVE_ERROR',
        });
      })
      .finally(() => {
      });
  }
  else if (action.type === 'SEARCH_SELECTED_EVENTS') {
    const stateCategory = store.getState().selectedCategoryID;
    api.get(`/event/${stateCategory}`)
      .then((response) => {
        console.log(stateCategory);
        store.dispatch({
          type: 'SAVE_SELECTED_EVENTS',
          list: response.data,
        });
      });
  }
  next(action);
};

export default ajax;
