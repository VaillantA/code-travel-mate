import axios from 'axios';

const api = axios.create({
  baseURL: 'http://benjamin-gleitz.vpnuser.lan:8080/api/v1',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === 'FETCH_EVENTS') {
    api.get('/event')
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.categories);
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
        // console.log(response.data);
        // console.log(response.data.image);
        store.dispatch({
          type: 'SAVE_CATEGORIES',
          categories: response.data,
          // image: response.data.image,
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
  else if (action.type === 'FETCH_ONE_EVENT') {
    api.get(`/event/${action.id}`)
      .then((response) => {
        console.log(response.data);
        store.dispatch({
          type: 'SAVE_ONE_EVENT',
          oneEvent: response.data,
          authorFirstname: response.data.creator.firstname,
          authorLastname: response.data.creator.lastname,
          oneEventCity: response.data.city.name,
          eventImage: response.data.categories[0].image,
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
