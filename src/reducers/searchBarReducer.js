export const initialState = {
  burgerOpen: false,
  searchBurgerOpen: false,
  burgerSearch: false,
  categoriesList: [],
  cityInProgress: '',
  selectedCategoryID: '',
  selectedCategory: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'BURGEN_OPEN':
      return {
        ...state,
        burgerOpen: !state.burgerOpen,
      };
    case 'SEARCHBAR_BURGEN_OPEN':
      return {
        ...state,
        searchbarBurgerOpen: !state.searchbarBurgerOpen,
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
        selectedCategoryID: action.category,
      };
    case 'CHANGE_RADIO':
      return {
        ...state,
        selectedCategoryID: action.category,
      };
    case 'SAVE_CATEGORIES':
      return {
        ...state,
        categoriesList: action.categories,
        image: action.image,
      };
    case 'REDIRECT_FALSE':
      return {
        ...state,
        cityInProgress: '',
        selectedCategoryID: '',
      };
    default:
      return state;
  }
};

export default reducer;
