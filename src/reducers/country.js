export const initialState = {
  countriesList: [],
  error: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_COUNTRIES':
      return {
        ...state,
        countriesList: action.countries,
      };
    case 'RECEIVE_ERROR':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default reducer;
