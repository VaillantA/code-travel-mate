export const initialState = {
  profilCardsOpen: false,
  favoritesOpen: false,
  image: '',
  nickname: '',
  age: '',
  description:'',
  language: '',
  nationality: '',
  createdEventList: [],
  eventsList: [],
  createdEventList:[],
  subscribe: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'DISPLAY_PROFILCARDS':
      return {
        ...state,
        profilCardsOpen: !state.profilCardsOpen,
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
        image: action.user.image,
        nickname: action.user.nickname,
        age: action.user.age,
        description: action.user.description,
        nationality: action.user.nationality,
        createdEventList: action.user.createdEvent,
        eventsList: action.user.events,

      };
    // case 'SAVE_USER_EVENTS':
    //   return {
    //     ...state,
    //     eventsList: action.userEvents,
    //   };
    case 'SAVE_SUBSCRIPTION':
      return {
        ...state,
        subscribe: true,
      };
    case 'SAVE_UNSUBSCRIBE':
      return {
        ...state,
        subscribe: false,
      };

    default:
      return state;
  }
};

export default reducer;
