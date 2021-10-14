// import state from "sweetalert/typings/modules/state";

export const initialState = {
  list: [],
  category: [],
  error: false,
  redirection: false,
  loading: true,
  oneEvent: [],
  /* isLiked : false, */
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_EVENTS':
      return {
        ...state,
        list: action.events,
        // loading: false,
      };
    case 'SAVE_ONE_EVENT':
      return {
        ...state,
        oneEvent: action.oneEvent,
        authorFirstname: action.authorFirstname,
        authorLastname: action.authorLastname,
        authorAge: action.authorAge,
        eventImage: action.eventImage,
        eventCity: action.oneEventCity,
        loading: false,
      };
    case 'RECEIVE_ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'SAVE_SELECTED_EVENTS':
      return {
        ...state,
        list: action.list,
        redirection: true,
        loading: false,
      };
    case 'SAVE_EVENTS_FROM_CATEGORY':
      return {
        ...state,
        list: action.list,
        redirection: true,
        loading: false,
      };
    case 'REDIRECT_FALSE':
      return {
        ...state,
        redirection: false,
        // loading: false,
      };
    case 'LOAD_TRUE':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
