export const initialState = {
  selectValue: '',
  firstname: '',
  lastname: '',
  pseudo: '',
  emailadress: '',
  password: '',
  confirmpassword: '',
  gender: '',
  description: '',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_USER_REGISTER':
      return {
        ...state,
        firtname: action.value,
        firstname: action.value,
        lastname: action.value,
        pseudo: action.value,
        emailadress: action.value,
        password: action.value,
        confirmpassword: action.value,
        gender: action.value,
        description: action.value,     
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
