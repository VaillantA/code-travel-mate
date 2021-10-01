import axios from 'axios';

const api = axios.create({
  baseURL: 'http://benjamin-gleitz.vpnuser.lan:8080/api/v1/',
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
  next(action);
};

export default ajax;