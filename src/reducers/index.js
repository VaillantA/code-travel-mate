const initialState = {

  burgerOpen: false,
  burgerSearch: false,
  destination:[
    {
      country:'France',
      id:1,
    },
    {
      country:'Espagne',
      id:2,
    },
    {
      country:'Canada',
      id:3,
    },
    {
      country:'Australie',
      id:4,
    },
  ],
  villes:[
    {
      city:'Paris',
    },
    {
      city:'Madrid',
    },
    {
      city:'Montreal',
    },
    {
      city:'Sydney',
    },
  ],
  categories:[
    {
      activité:'Sport',
    },
    {
      activités:'Culturel',
    },
    {
      activités:'Restaurant',
    },
    {
      activités:'Festifs',
    },
    {
      activités:'Rencontres',
    },
    {
      activités:'Nature',
    },
    {
      activités:'Entraide',
    },
  ]
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
