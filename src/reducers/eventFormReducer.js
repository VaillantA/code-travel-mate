export const initialState = {
  selectedCategoryID: '',
  title: '',
  description: '',
  resume: '',
  date: '',

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
    default:
      return state;
  }
};

export default reducer;
