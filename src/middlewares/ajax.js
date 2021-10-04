import axios from 'axios';

const api = axios.create({
  baseURL: 'http://benjamin-gleitz.vpnuser.lan:8080',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === 'FETCH_EVENTS') {
    api.get('/api/v1/event')
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
    api.get('/api/v1/category')
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
  else if (action.type === 'FETCH_USER') {
    api.get(`/api/v1/user/${action.id}`)
      .then((response) => {
        console.log(response.data);
        store.dispatch({
          type: 'SAVE_USER',
          user: response.data,
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
  /* else if (action.type === 'FETCH_CREATEDEVENT') {
    api.get('/api/v1/user/113')
      .then((response) => {
        store.dispatch({
          type: 'SAVE_CREATEDEVENT',
          createdEvent: response.data,
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
  } */
  next(action);
};

export default ajax;
