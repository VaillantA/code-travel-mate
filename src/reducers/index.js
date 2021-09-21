const initialState = {

  burgerOpen: false,
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'BURGEN_OPEN':
      return {
        ...state,
        burgerOpen: !state.burgerOpen,
      };
      default:
          return state;
  }
};

export default reducer;
