export const initialState = {
    profilCardsOpen: false, 
    favoritesOpen : false,
    list : [],  
};

const reducer = (state = initialState, action = {}) => {
console.log(action );
  switch (action.type) {
    case 'DISPLAY_PROFILCARDS':
      return{
        ...state,
        profilCardsOpen:!state.profilCardsOpen,
      };
      case 'DISPLAY_FAVORITESCARDS':
      return {
        ...state,
        favoritesOpen: !state.favoritesOpen,
      };
      
    default:
      return state;
  }
};

export default reducer;
