export const initialState = {
  list: [],
  category: [],
  error: false,
  redirection: false,
  loading: true,
  searchedlist: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_EVENTS':
      return {
        ...state,
        list: action.events,
        loading: false,
      };
    case 'SAVE_SEARCHED_EVENTS':
      return {
        ...state,
        searchedlist: action.eventsList,
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
    case 'REDIRECT_FALSE':
      return {
        ...state,
        redirection: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
