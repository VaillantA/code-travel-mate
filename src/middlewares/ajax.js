import axios from 'axios';

const api = axios.create({
  baseURL: 'http://benjamin-gleitz.vpnuser.lan:8080',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === 'FETCH_EVENTS') {
    api.get('/api/v1/event')
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
    api.get('/api/v1/category')
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
    api.get(`/api/v1/event/${action.id}`)
      .then((response) => {
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
  else if (action.type === 'FETCH_EVENTS_FROM_CATEGORY') {
    api.get(`/api/v1/search?search=&category=${action.id}`)
      .then((response) => {
        store.dispatch({
          type: 'SAVE_EVENTS_FROM_CATEGORY',
          list: response.data,
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
    const stateCategory = store.getState().searchBar.selectedCategoryID;
    const stateCity = store.getState().searchBar.cityInProgress;
    api.get(`api/v1/search?search=${stateCity}&category=${stateCategory}`)
      .then((response) => {
        store.dispatch({
          type: 'SAVE_SELECTED_EVENTS',
          list: response.data,
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
    /* http://localhost:8080/api/v1/search?search=bel&category=80 */
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
          type: 'SAVE_USER_LOGIN',
          pseudo: response.data.data.nickname,
        });
      })
      .catch((error) => {
        console.log(error);
        alert('No match found, please try again');
      });
  }
  else if (action.type === 'REGISTER') {
    const state = store.getState();
    api.post('/api/v1/registration/', {
      firstname: state.register.firstname,
      lastname: state.register.lastname,
      nickname: state.register.pseudo,
      email: state.register.email,
      password: state.register.password,
      gender: state.register.gender,
      description: state.register.description,
      // age: state.register.age,
    })
      .then((response) => {
        store.dispatch({
          type: 'SAVE_USER_REGISTER',

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
