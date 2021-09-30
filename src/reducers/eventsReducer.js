export const initialState = {
  list: [],
  category: [],
  error: false,
  redirection: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_EVENTS':
      return {
        ...state,
        list: action.events,
      };
    case 'RECEIVE_ERROR':
      return {
        ...state,
        error: true,
      };
    case 'SAVE_SELECTED_EVENTS':
      return {
        ...state,
        list: action.list,
        redirection: true,
      };
    case 'REDIRECT_FALSE':
      return {
        ...state,
        redirection: false,
      };
    default:
      return state;
  }
};

export default reducer;
