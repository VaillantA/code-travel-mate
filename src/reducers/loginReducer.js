export const initialState = {
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.newValue, // avec des [] on peut mettre un nom de propriété dynamique
      };
    case 'LOGIN':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
