export const initialState = {
  loading: false,
  loginOpen: false,
  logged: false,
  email: '',
  password: '',
  pseudo: '',
  selectValue: '',

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
    case 'SAVE_USER':
      return {
        ...state,
        logged: true,
        email: '',
        password: '',
        pseudo: action.pseudo,
        loginOpen: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        pseudo: 'Utilisateur anonyme',
      };
    case 'CHANGE_SELECTED':
      return {
        ...state,
        selectValue: action.value,
      };
    case 'SAVE_USER_REGISTER':
      return {
        ...state,
      
      };
    default:
      return state;
  }
};

export default reducer;
