import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://tai-patrick-buth-khun.vpnuser.lan/apotheose/projet-travel-mate/travel-mate-back/public',
  baseURL: 'http://tai-patrick-buth-khun.vpnuser.lan:8000/api/v1/',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === 'FETCH_COUNTRIES') {
    api.get('country')
      .then((response) => {
        store.dispatch({
          type: 'SAVE_COUNTRIES',
          countries: response.data,
        });
      })
      .catch((error) => {
         {console.log(error)}
        store.dispatch({
          type: 'RECEIVE_ERROR',
        });
      })
      .finally(() => {
        // always executed
      });
  }
  next(action);
};
// /api/v1/country/1

export default ajax;
