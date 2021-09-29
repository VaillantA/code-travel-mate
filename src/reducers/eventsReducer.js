export const initialState = {
  list: [],
  category: [],
  error: false,
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
      };
    default:
      return state;
  }
};

export default reducer;
