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
        loading: false,
      };
      /* case 'SAVE_LIKED':
      return {
        ...state,
        isLiked: true,
      }; */
    default:
      return state;
  }
};

export default reducer;
