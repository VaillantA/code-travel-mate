const initialState = {

  burgerOpen: false,
  burgerSearch: false,
  categories: [
    {
      option: 'Sport',
      id: 1,
    },
    {
      option: 'Culturel',
      id: 2,
    },
    {
      option: 'Restaurant',
      id: 3,
    },
    {
      option: 'Festifs',
      id: 4,
    },
    {
      option: 'Rencontres',
      id: 5,
    },
    {
      option: 'Nature',
      id: 6,
    },
    {
      option: 'Entraide',
      id: 7,
    },
  ],
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
    default:
      return state;
  }
};

export default reducer;
