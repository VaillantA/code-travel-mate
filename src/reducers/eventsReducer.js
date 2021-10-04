export const initialState = {
  list: [],
  category: [],
  error: false,
  oneEvent: [],
  // eventsImages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_EVENTS':
      return {
        ...state,
        list: action.events,
      };
    case 'SAVE_ONE_EVENT':
      return {
        ...state,
        oneEvent: action.oneEvent,
        authorFirstname: action.authorFirstname,
        authorLastname: action.authorLastname,
        eventImage: action.eventImage,
        eventCity: action.oneEventCity,
      };
    case 'RECEIVE_ERROR':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
