export const initialState = {
    profilCardsOpen: false, 
    favoritesOpen : false,
    image : "",  
    nickname : "",
    age : "",
    language : "",
    nationality : "",
    list : [] ,
  
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
    case 'SAVE_USER':
      return {
        ...state,
       /*  [action.key]:action.user, */
       image : action.user.image,
       nickname : action.user.nickname,
       age: action.user.age,
       nationality: action.user.nationality,
        list : action.user.events,
       
      };
      /* case 'SAVE_CREATEDEVENT':
      return {
        ...state,
        [action.key]:action.createdEvent,
      }; */
      
      
    default:
      return state;
  }
};

export default reducer;
