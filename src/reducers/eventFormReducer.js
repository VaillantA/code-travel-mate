export const initialState = {
  selectedCategoryID: '',
  title: '',
  description: '',
  resume: '',
  date: '',
  city: '',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VALUE_EVENT_FORM':
      return {
        ...state,
        [action.key]: action.newValue, // avec des [] on peut mettre un nom de propriété dynamique
      };
    case 'CHANGE_SELECT_EVENT_FORM':
      return {
        ...state,
        selectedCategoryID: action.category,
      };
    case 'SAVE_EVENT_CREATE':
      return {
        ...state,
        // selectedCategoryID: action.value,
        title: action.value,
        description: action.value,
        resume: action.value,
        date: action.value,
        city: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
