export const initialState = {
  burgerOpen: false,
  burgerSearch: false,
  categoriesList: [],
  cityInProgress: '',
  selectedCategory: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'BURGEN_OPEN':
      return {
        ...state,
        burgerOpen: !state.burgerOpen,
      };
    case 'BURGER_SEARCH':
      return {
        ...state,
        burgerSearch: !state.burgerSearch,
      };
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        cityInProgress: action.city,
      };
    case 'CHANGE_SELECT':
      return {
        ...state,
        selectedCategory: action.category,
      };
    case 'CHANGE_RADIO':
      return {
        ...state,
        selectedCategory: action.category,
      };
    case 'SAVE_CATEGORIES':
      return {
        ...state,
        categoriesList: action.categories,
      };
    default:
      return state;
  }
};

export default reducer;
