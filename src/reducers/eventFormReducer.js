export const initialState = {
  selectedCategoryID: '',
  title: '',
  content: '',
  resume: '',
  date: '',
  selectedCity: '',
  citiesList: [],
  selectCityID: '',
  // selectedOptionsID: [],

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
    case 'CHANGE_SELECT_CITY_FORM':
      return {
        ...state,
        selectedCityID: action.city,
      };
    case 'SAVE_EVENT_CREATE':
      return {
        ...state,
        // selectedCategoryID: action.value,
        title: action.value,
        content: action.value,
        resume: action.value,
        date: action.value,
        selectedCity: action.value,
      };
    case 'SAVE_CITIES':
      return {
        ...state,
        citiesList: action.cities,
      };
    default:
      return state;
  }
};

export default reducer;
