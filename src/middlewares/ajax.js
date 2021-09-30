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
  else if (action.type === 'LOGIN') {
    const state = store.getState();
    api.post('/api/login_check', {
      username: state.login.email,
      password: state.login.password,
    })
      .then((response) => {
        api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
        console.log(response);
        // localStorage.setItem(JSON.stringify(`${response.data.id}`), JSON.stringify(response.data));
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: response.data.nickname,
        });
      })
      .catch((error) => {
        console.log(error);
        alert('No match found, please try again');
      });
  }
  next(action);
};

export default ajax;
