export const initialState = {
  selectValue: '',
  firstname: '',
  lastname: '',
  pseudo: '',
  email: '',
  password: '',
  confirmpassword: '',
  gender: '',
  description: '',
  age: '',
  token: '',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VALUE_LOGIN_FORM':
      return {
        ...state,
        [action.key]: action.newValue, // avec des [] on peut mettre un nom de propriété dynamique
      };
    case 'SAVE_USER_REGISTER':
      return {
        ...state,
        firtname: action.value,
        firstname: action.value,
        lastname: action.value,
        pseudo: action.value,
        email: action.value,
        password: action.value,
        confirmpassword: action.value,
        gender: action.value,
        description: action.value,
        age: action.value,
      };
    case 'CHANGE_SELECTED':
      return {
        ...state,
        selectValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
