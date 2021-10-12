export const initialState = {
  loading: false,
  loginOpen: false,
  logged: false,
  email: '',
  password: '',
  pseudo: '',
  token: '',
  userId: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.newValue, // avec des [] on peut mettre un nom de propriété dynamique
      };
    case 'TOGGLE_OPEN':
      return {
        ...state,
        loginOpen: !state.loginOpen,
      };
    case 'SAVE_USER_LOGIN':
      return {
        ...state,
        logged: true,
        email: '',
        password: '',
        pseudo: action.pseudo,
        loginOpen: false,
        token: action.token,
        userId: action.userId,
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        pseudo: '',
        token: '',
      };
    // case 'REDIRECT_TO':
    //   return {
    //     ...state,
    //     redirectTo: action.value,
    //   };

    default:
      return state;
  }
};

export default reducer;
