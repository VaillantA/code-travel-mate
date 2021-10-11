import axios from 'axios';
import swal from 'sweetalert';

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
  else if (action.type === 'FETCH_CITIES') {
    api.get('/api/v1/city')
      .then((response) => {
        store.dispatch({
          type: 'SAVE_CITIES',
          cities: response.data,
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
        // console.log(response.data);
        store.dispatch({
          type: 'SAVE_ONE_EVENT',
          oneEvent: response.data,
          authorFirstname: response.data.creator.firstname,
          authorLastname: response.data.creator.lastname,
          authorAge: response.data.creator.age,
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
        console.log(response.data);
        store.dispatch({
          type: 'SAVE_EVENTS_FROM_CATEGORY',
          list: response.data,
          // image: response.data.categories[0].image,
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
    api.get(`/api/v1/search?search=${stateCity}&category=${stateCategory}`)
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
        sessionStorage.setItem('key', JSON.stringify(response.data));
        // localStorage.setItem(JSON.stringify(`${response.data.id}`), JSON.stringify(response.data));
        store.dispatch({
          type: 'SAVE_USER_LOGIN',
          pseudo: response.data.data.nickname,
          token: response.data.token,
          id: response.data.data.id,
        });
      })
      .catch((error) => {
        console.log(error);
        alert('No match found, please try again');
      });
  }
  else if (action.type === 'REGISTER') {
    const state = store.getState();
    const ageToInteger = state.register.age;
    api.post('/api/v1/registration/', {
      firstname: state.register.firstname,
      lastname: state.register.lastname,
      nickname: state.register.pseudo,
      email: state.register.email,
      /* age : state .register.parseInt(age), */
      password: state.register.password,
      gender: state.register.gender,
      description: state.register.description,
      age: parseInt(ageToInteger, 10),
      nationality: state.register.nationality,
    })
      .then((response) => {
        store.dispatch({
          type: 'SAVE_USER_REGISTER',
        });
        swal({
          title: 'Good job!',
          text: 'Congratulations, your account has been created',
          icon: 'success',
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
  else if (action.type === 'SUBSCRIPTION') {
    api.put(`/api/v1/event/subscription/${action.eventID}`, {
      id: action.userID,
    })
      .then((response) => {
        store.dispatch({
          type: 'SAVE_SUBSCRIPTION',
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
  else if (action.type === 'UNSUBSCRIBE') {
    api.put(`/api/v1/event/removal/${action.eventID}`, {
      id: action.userID,
    })
      .then((response) => {
        store.dispatch({
          type: 'SAVE_UNSUBSCRIBE',
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
  else if (action.type === 'CREATE_EVENT') {
    const state = store.getState();
    api.post('/api/v1/event/', {
      title: state.eventForm.title,
      content: state.eventForm.content,
      resume: state.eventForm.resume,
      date: state.eventForm.date,
      categories: [state.eventForm.selectedCategoryID],
      city: parseInt(state.eventForm.selectedCityID, 10),
    })
      .then((response) => {
        store.dispatch({
          type: 'SAVE_EVENT_CREATE',
        });
        swal({
          title: 'Good job!',
          text: 'Congratulations, your event has been created',
          icon: 'success',
        });
      })
      .finally(() => {
      });
  }
  next(action);
};

export default ajax;
