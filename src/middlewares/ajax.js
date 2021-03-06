import axios from 'axios';
import swal from 'sweetalert';

const api = axios.create({
  baseURL: 'http://benjamin-gleitz.vpnuser.lan:8000',
});

if (sessionStorage.getItem('key')) {
  const data = JSON.parse(sessionStorage.getItem('key'));
  const token = data.token;
  api.defaults.headers.common.Authorization = `bearer ${token}`;
}

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
        console.log(response)
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
        sessionStorage.setItem('key', JSON.stringify(response.data));
        store.dispatch({
          type: 'SAVE_USER_LOGIN',
          pseudo: response.data.data.nickname,
          token: response.data.token,
          id: response.data.data.id,
        });

        // TODO: trouver mieux ?
        window.location.href = '/profil';
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: 'Oops',
          text: 'No match found, please try again',
          icon: 'error',
        });
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
          title: 'Congratulations ',
          text: 'Your account has been created',
          icon: 'success',
        }).then(() => {
          window.location = '/';
        });
      })
      .catch((error) => {
        console.log(error);
        store.dispatch({
          type: 'RECEIVE_ERROR',
        });
        swal({
          title: 'Oops',
          text: 'Something went wrong, please try again',
          icon: 'error',
        }).then(() => {
          window.location = '/registration';
        });
      })
      .finally(() => {
      });
  }
  else if (action.type === 'FETCH_USER') {
    api.get(`/api/v1/user/${action.id}`)
      .then((response) => {
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
      // id: action.userId,
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
      token: state.login.token,
    })
      .then((response) => {
        store.dispatch({
          type: 'SAVE_EVENT_CREATE',
        });
        swal({
          title: 'Good job!',
          text: 'Congratulations, your event has been created',
          icon: 'success',
        }).then(() => {
          window.location = '/profil';
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
